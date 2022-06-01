//
//  UMListViewController.m
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//
#define     TABLE_WIDTH      [UIScreen mainScreen].bounds.size.width
#define     TABLE_HEIGHT     [UIScreen mainScreen].bounds.size.height
#import "UMListViewController.h"
#import "UMContentController.h"
#import "UMDemoUtils.h"
#import <UMCommon/MobClick.h>
#import <UMSpm/UMSpm.h>
@interface UMListViewController ()<UITableViewDelegate, UITableViewDataSource>


@property (nonatomic, strong) UITextField *sText;
@property (nonatomic, strong) UITableView *tableView;
@property (nonatomic, strong) UILabel *kLabel;

@property (nonatomic, strong, nullable) NSArray *digitalArr;

@property (nonatomic, strong, nullable) NSMutableArray *cellArr;



@end
@implementation UMListViewController


- (void)viewDidAppear:(BOOL)animated
{
    
    [super viewDidAppear:animated];
    [UMDemoUtils sharedInstance].pageName=@"PageSearch";

    [MobClick beginLogPageView:@"PageSearch"];

}


- (void)viewDidDisappear:(BOOL)animated
{
    [super viewDidDisappear:animated];
    [MobClick endLogPageView:@"PageSearch"];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    _cellArr = [[NSMutableArray alloc]init];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor whiteColor];
    self.title=@"搜索页";
    
    //搜索栏
    
    UILabel *sLabel=[[UILabel alloc]init];
    [sLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    sLabel.frame = CGRectMake(20, 100, 100, 50);
    sLabel.text=@"搜索栏:";
    [self.view addSubview:sLabel];

    
    _sText = [[UITextField alloc]initWithFrame:CGRectMake(100, 110, 200, 30)];
    _sText.borderStyle = UITextBorderStyleRoundedRect;
    _sText.placeholder = @"输入搜索关键词";

    [self.view addSubview:_sText];
    
    
    UILabel *keyLabel=[[UILabel alloc]init];
    [keyLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    keyLabel.frame = CGRectMake(20, 150, 100, 50);
    keyLabel.text=@"关键词:";
    [self.view addSubview:keyLabel];
    
    _kLabel=[[UILabel alloc]init];
    [_kLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    _kLabel.frame = CGRectMake(100, 150, 100, 50);
    if ([UMDemoUtils notEmptyString:_sKey]) {
        _kLabel.text=_sKey;
    }
 //   kLabel.text=@"关键词:";
    [self.view addSubview:_kLabel];
    
    
    UIButton* sBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    sBtn.backgroundColor = [UIColor lightGrayColor];
    sBtn.frame = CGRectMake(310, 110, 50, 30);
    [sBtn addTarget:self action:@selector(searchClick) forControlEvents:(UIControlEventTouchUpInside)];
    [sBtn setTitle:@"搜索" forState:(UIControlStateNormal)];
    [self.view addSubview:sBtn];
    
    if ([UMDemoUtils notEmptyString:_sKey]) {
        NSMutableArray *arr=[[NSMutableArray alloc]init];
        for (int i=1; i<6; i++) {
            NSString * str =[[NSString alloc]initWithFormat:@"%@内容%d",_sKey,i];
            [arr addObject:str];
        }
        if ([arr count]>0) {
            self.digitalArr = arr;

        }
        
    }
   // self.digitalArr = @[@"搜索内容1", @"搜索内容2", @"搜索内容3",@"搜索内容4",@"搜索内容5"];
    [self.view addSubview:self.tableView];

}


-(void)searchClick{
    NSString *keyWord=_sText.text;
    [MobClick event:@"SearchBtn" attributes:@{@"keyword":keyWord}];

    _kLabel.text=keyWord;
    if ([UMDemoUtils notEmptyString:keyWord]) {
        NSMutableArray *arr=[[NSMutableArray alloc]init];
        for (int i=1; i<6; i++) {
            NSString * str =[[NSString alloc]initWithFormat:@"%@内容%d",keyWord,i];
            [arr addObject:str];
        }
        if ([arr count]>0) {
            self.digitalArr = arr;

        }
        [_tableView reloadData];
    }
 
    
    _sText.text=@"";
}


#pragma mark - UITableViewDelegate

// cell高度
- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    return 60;
}


// Header高度
- (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section {
    
    return 30;
}


// Footer高度
- (CGFloat)tableView:(UITableView *)tableView heightForFooterInSection:(NSInteger)section {
    
    return 30;
}


// 选中了某个cell
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    
    [UMSpm updateNextPageProperties:@{@"ref_keyword":_digitalArr[(long)indexPath.row],@"ref_index":@(indexPath.row)}];

    UMContentController *vc = [[UMContentController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
}


#pragma mark - UITableViewDataSource

// Section数量
- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    
    return 2;
}


// 对应Section中cell的个数
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    
    switch (section) {
            case 0:
            return self.digitalArr.count;
            break;
            
         
            
        default:
            break;
    }
    
    return 0;
}


// Header标题
- (nullable NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
    
  
    
    return nil;
}


// Footer标题
- (nullable NSString *)tableView:(UITableView *)tableView titleForFooterInSection:(NSInteger)section {
    
   
    
    return nil;
}


// cell
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    if ([_digitalArr count]) {
        
    }
    
    // 实例化一个UITableViewCell
    UITableViewCell *cell = nil;
    // 由于已经注册过重用cell,所以这里不必判断是否存在
    
        if (cell == nil) {
            cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:@"cell"];

        }
    
    // 设置cell相关属性
    NSLog(@"indexpath--------%ld-------%ld",(long)indexPath.section,(long)indexPath.row);
    switch (indexPath.section) {
            
            case 0:     // 数字组
            if (indexPath.row < self.digitalArr.count) {
                [_cellArr addObject:@{@"keyword":self.digitalArr[indexPath.row],@"index":@((long)indexPath.row)}];
                cell.textLabel.text = self.digitalArr[indexPath.row];
                NSLog(@"indexpath--name--%@",self.digitalArr[indexPath.row]);
              
                
            }
            
          
            break;

            
        default:
            break;
    }
    
    // 返回cell
    return cell;
}


#pragma mark - 懒加载

- (UITableView *)tableView {
    
    if (_tableView == nil) {
        // 实例化一个UITableView
        _tableView = [[UITableView alloc] initWithFrame:CGRectMake(20, 200, TABLE_WIDTH-40, 500)
                                                  style:UITableViewStylePlain];
        // 注册一个cell
        [_tableView registerClass:[UITableViewCell class] forCellReuseIdentifier:@"myCell"];
        // 设置代理
        _tableView.delegate = self;
        _tableView.dataSource = self;
        _tableView.scrollEnabled = NO;
    }
    
    return _tableView;
}


-(void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event{
    [_sText resignFirstResponder];
}

-(void) tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath

{

 

    if([indexPath row] == ((NSIndexPath*)[[tableView indexPathsForVisibleRows] lastObject]).row){

        //end of loading

        dispatch_async(dispatch_get_main_queue(),^{
            if ([self->_cellArr count]>0) {
                [MobClick event:@"ShowSearchItem" attributes:@{@"itemlist":[UMDemoUtils JSONFragment:self->_cellArr]}];
                [self->_cellArr removeAllObjects];
            }
            //这个判断主要是用于你想单改某一组或者某一行数据
            if (indexPath.section==2) {
                



                      }

                  });

              }

          }

@end
