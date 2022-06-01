//
//  UMMainViewController.m
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//

#import "UMMainViewController.h"
#import "UMDemoUtils.h"
#import "ScrollV.h"
#import "PageC.h"
#import "UMListViewController.h"
#import "UMContentController.h"
#import <UMCommon/MobClick.h>
#import <UMSpm/UMSpm.h>
#import <UMCommon/UMConfigure.h>
#import "UMWKWebViewController.h"
#import "UMNewViewController.h"
@interface UMMainViewController ()<UMInterfaceDelegate,UITextViewDelegate>{
    PageC * page;
}

@property (nonatomic, strong) UILabel *idLabel;
@property (nonatomic, strong) UITextField *loginText;
@property (nonatomic, strong) UITextField *propertText;
@property (nonatomic, strong) UITextField *domainText;
@property (nonatomic, strong) UITextField *appkeyText;

@property (nonatomic, strong) UILabel *propertLabel;
@property (nonatomic, strong) UILabel *domainLabel;
@property (nonatomic, strong) UILabel *appkeyLabel;

@property (nonatomic, strong) UITextField *sText;
@property (nonatomic, assign) BOOL isShow;
@property (retain) NSMutableArray *pageArr;





@end
@implementation UMMainViewController

- (void)viewDidAppear:(BOOL)animated
{
    
    [super viewDidAppear:animated];



    [UMDemoUtils sharedInstance].pageName=@"PageHome";
    [MobClick beginLogPageView:@"PageHome"];
    [UMSpm updatePageProperties:@"PageHome" properties:@{@"page_version":@"1.0"}];
    
    
    [MobClick event:@"bindingEkv1" pageName:@""];
 //   [MobClick event:@"bindingEkv1" pageName:nil];
    
//    [MobClick event:@"bindingEkv2" pageName:@"bindingPag2" attributes:@{@"key1":@"val1"}];
//    [MobClick event:@"bindingEkv2" pageName:nil attributes:@{@"key1":@"val1"}];
//
//    [MobClick event:@"bindingEkv3" attributes:@{@"key1":@"val1"} counter:3 pageName:@"bindingPag3"];
//    [MobClick event:@"bindingEkv3" attributes:@{@"key1":@"val1"} counter:3 pageName:nil];


//module tag
//    Class cls =  NSClassFromString(@"UMUtils");
//    SEL sel = NSSelectorFromString(@"setModuleTag:key:value:");
//    if (cls && [cls respondsToSelector:sel]) {
//        //add
//        [UMMainViewController perform:nil withClass:@"UMUtils" withMethod:@"setModuleTag:key:value:" withObjects:@[@(1),@"apmkey",@"apmval"]];
//
//        //del
//        [UMMainViewController perform:nil withClass:@"UMUtils" withMethod:@"deleteModuleTag:key:" withObjects:@[@(1),@"apmkey"]];
//    }
    
    

}


- (void)viewDidDisappear:(BOOL)animated
{
    [super viewDidDisappear:animated];

    [MobClick endLogPageView:@"PageHome"];
}
- (void)viewDidLoad {
    _pageArr = [[NSMutableArray alloc]init];
//    CGRect mainScreenRC = [UIScreen mainScreen].bounds;
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(keyboardWillShow:) name:UIKeyboardWillShowNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(keyboardWillHide:) name:UIKeyboardWillHideNotification object:nil];
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    
    self.view.backgroundColor = [UIColor whiteColor];
    self.title=@"首页";
    [super viewDidLoad];
    
    UILabel *loginLabel=[[UILabel alloc]init];
    [loginLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    loginLabel.frame = CGRectMake(20, 230, 100, 50);
    loginLabel.text=@"登录用户:";
    [self.view addSubview:loginLabel];

    
    _loginText = [[UITextField alloc]initWithFrame:CGRectMake(100,240, 200, 30)];
    _loginText.borderStyle = UITextBorderStyleRoundedRect;
    [self.view addSubview:_loginText];

    UIButton* loginBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    loginBtn.backgroundColor = [UIColor lightGrayColor];
    loginBtn.frame = CGRectMake(310, 240, 50, 30);
    [loginBtn addTarget:self action:@selector(loginClick) forControlEvents:(UIControlEventTouchUpInside)];
    [loginBtn setTitle:@"登录" forState:(UIControlStateNormal)];
    [self.view addSubview:loginBtn];
    
    _idLabel=[[UILabel alloc]init];
    [_idLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    _idLabel.frame = CGRectMake(20, 270, 280, 50);
    NSString * loginStr =[[NSString alloc]initWithFormat:@"当前登录用户ID:%@",[defaults objectForKey:@"UMDemoId"]];
    _idLabel.text=loginStr;
    [self.view addSubview:_idLabel];
    
    UIButton* logoutBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    logoutBtn.backgroundColor = [UIColor lightGrayColor];
    logoutBtn.frame = CGRectMake(310, 280, 50, 30);
    [logoutBtn addTarget:self action:@selector(logoutClick) forControlEvents:(UIControlEventTouchUpInside)];
    [logoutBtn setTitle:@"登出" forState:(UIControlStateNormal)];
    [self.view addSubview:logoutBtn];
    
    
    
    //全局参数
    UILabel *propertLabel=[[UILabel alloc]init];
    [propertLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    propertLabel.frame = CGRectMake(20, 360, 100, 50);
    propertLabel.text=@"全局参数:";
    [self.view addSubview:propertLabel];

    _propertText = [[UITextField alloc]initWithFrame:CGRectMake(100,370, 200, 30)];
    _propertText.borderStyle = UITextBorderStyleRoundedRect;
    _propertText.placeholder=@"如:key=val 格式";
    [self.view addSubview:_propertText];
//    _propertText = [[UITextView alloc]initWithFrame:CGRectMake(100, 440, 200, 100)];
////    _propertText.borderStyle = UITextBorderStyleRoundedRect;
////    _propertText.placeholder = @"如:key:val,key1:val1 格式";
//    _propertText.scrollEnabled =YES;
//    _propertText.editable=YES;
//    _propertText.delegate=self;
//    _propertText.font=[UIFont fontWithName:@"Arial" size:16.0];
//    _propertText.returnKeyType = UIReturnKeyDefault;
//    _propertText.keyboardType = UIKeyboardTypeDefault;
//    _propertText.textAlignment = NSTextAlignmentLeft;
//    _propertText.layer.borderColor = [UIColor grayColor].CGColor;
//
//    _propertText.layer.borderWidth =1.0;
//    _propertText.layer.cornerRadius =5.0;
//  //  _propertText.dataDetectorTypes = UIDataDetectorTypeAll; //显示数据类型的连接模式（如电话号码、网址、地址等）
//    _propertText.textColor = [UIColor blackColor];// 设置显示文字颜色
   
    [self.view addSubview:_propertText];

    UIButton* propertBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    propertBtn.backgroundColor = [UIColor lightGrayColor];
    propertBtn.frame = CGRectMake(310, 370, 50, 30);
    [propertBtn addTarget:self action:@selector(propertClick) forControlEvents:(UIControlEventTouchUpInside)];
    [propertBtn setTitle:@"设置" forState:(UIControlStateNormal)];
    [self.view addSubview:propertBtn];
    
    
    _propertLabel=[[UILabel alloc]init];
    [_propertLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    _propertLabel.frame = CGRectMake(20, 330, 280, 200);
    _propertLabel.numberOfLines = 0;//表示label可以多行显示

    NSString * propertStr =[[NSString alloc]initWithFormat:@"当前全局参数:%@",[UMDemoUtils JSONFragment:[MobClick getSuperProperties]]];

    _propertLabel.text=propertStr;
    [self.view addSubview:_propertLabel];
//
    UIButton* clearBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    clearBtn.backgroundColor = [UIColor lightGrayColor];
    clearBtn.frame = CGRectMake(310, 410, 50, 30);
    [clearBtn addTarget:self action:@selector(clearClick) forControlEvents:(UIControlEventTouchUpInside)];
    [clearBtn setTitle:@"清空" forState:(UIControlStateNormal)];
    [self.view addSubview:clearBtn];
    
    //搜索栏
    
    UILabel *sLabel=[[UILabel alloc]init];
    [sLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    sLabel.frame = CGRectMake(20, 310, 100, 50);
    sLabel.text=@"搜索栏:";
    [self.view addSubview:sLabel];

    
    _sText = [[UITextField alloc]initWithFrame:CGRectMake(100, 320, 200, 30)];
    _sText.borderStyle = UITextBorderStyleRoundedRect;
    _sText.placeholder = @"输入搜索关键词";

    [self.view addSubview:_sText];

    UIButton* sBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    sBtn.backgroundColor = [UIColor lightGrayColor];
    sBtn.frame = CGRectMake(310, 320, 50, 30);
    [sBtn addTarget:self action:@selector(searchClick) forControlEvents:(UIControlEventTouchUpInside)];
    [sBtn setTitle:@"搜索" forState:(UIControlStateNormal)];
    [self.view addSubview:sBtn];
    
    
    UITapGestureRecognizer *singleTap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(fingerTapped:)];
       [self.view addGestureRecognizer:singleTap];
    
    //创建轮播图
    ScrollV * scroll = [[ScrollV alloc]initWithFrame:CGRectMake(20, 80, CGRectGetWidth(self.view.bounds)-40, 150) andImageArr:@[[UIImage imageNamed:@"1.jpg"],[UIImage imageNamed:@"2.jpg"],[UIImage imageNamed:@"3.jpg"],] andTitle:@[@"page1",@"page2",@"page3"]];
    //签订协议
    scroll.delegates = self;
    
    //开始轮播
    [scroll start];
    
    [self.view addSubview:scroll];
    
    
    //创建分页page（这里的frma的宽高会适配的）
    page = [[PageC alloc]initWithFrame:CGRectMake(260, 210, CGRectGetWidth(self.view.bounds), 20) andPageNum:3];
    //设定风格
    page.Style = pageCBtnStyleRound;
    //设定每个按钮的宽高
    page.pageSize = CGSizeMake(10, 10);
    //设定间隙可间距
    page.pageClearance = 20;
    //设置背景图片
//    page.pageImage = @[[UIImage imageNamed:@"3.jpg"],[UIImage imageNamed:@"4.jpeg"],[UIImage imageNamed:@"5.jpg"]];
//    //设置高亮背景图片
//    page.pageHetImage = @[[UIImage imageNamed:@"3.jpg"],[UIImage imageNamed:@"3.jpg"],[UIImage imageNamed:@"3.jpg"]];
    [self.view addSubview:page];
    page.updateUserInfoBlock = ^(NSInteger page) {
        [scroll pageContentOffset:page+1];
    };
    
    
    //设置发送域名
    
    UILabel *domainLabel=[[UILabel alloc]init];
    [domainLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    domainLabel.frame = CGRectMake(20, 560, 100, 50);
    domainLabel.text=@"设置域名:";
    [self.view addSubview:domainLabel];

    _domainText = [[UITextField alloc]initWithFrame:CGRectMake(100,570, 200, 30)];
    _domainText.borderStyle = UITextBorderStyleRoundedRect;
    [self.view addSubview:_domainText];
    
    
    UIButton* domainBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    domainBtn.backgroundColor = [UIColor lightGrayColor];
    domainBtn.frame = CGRectMake(310, 570, 50, 30);
    [domainBtn addTarget:self action:@selector(domainClick) forControlEvents:(UIControlEventTouchUpInside)];
    [domainBtn setTitle:@"设置" forState:(UIControlStateNormal)];
    [self.view addSubview:domainBtn];
    
    _domainLabel=[[UILabel alloc]init];
    [_domainLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    _domainLabel.frame = CGRectMake(20, 520, 330, 200);
    _domainLabel.numberOfLines = 0;//表示label可以多行显示

    NSString * domainStr =[[NSString alloc]initWithFormat:@"当前域名:%@",[UMDemoUtils sharedInstance].domain];
    _domainLabel.text=domainStr;
    [self.view addSubview:_domainLabel];
    
    
    UILabel *appkeyLabel=[[UILabel alloc]init];
    [appkeyLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    appkeyLabel.frame = CGRectMake(20, 500, 100, 50);
    appkeyLabel.text=@"设置appkey:";
    [self.view addSubview:appkeyLabel];

    _appkeyText = [[UITextField alloc]initWithFrame:CGRectMake(120,510, 180, 30)];
    _appkeyText.borderStyle = UITextBorderStyleRoundedRect;
    [self.view addSubview:_appkeyText];
    
    
    UIButton* appkeyBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    appkeyBtn.backgroundColor = [UIColor lightGrayColor];
    appkeyBtn.frame = CGRectMake(310, 510, 50, 30);
    [appkeyBtn addTarget:self action:@selector(appkeyClick) forControlEvents:(UIControlEventTouchUpInside)];
    [appkeyBtn setTitle:@"设置" forState:(UIControlStateNormal)];
    [self.view addSubview:appkeyBtn];
    
    _appkeyLabel=[[UILabel alloc]init];
    [_appkeyLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:16]];
    _appkeyLabel.frame = CGRectMake(20, 455, 330, 200);
    _appkeyLabel.numberOfLines = 0;//表示label可以多行显示

    NSString * appkeyStr =[[NSString alloc]initWithFormat:@"当前appeky:%@",[UMDemoUtils sharedInstance].appkey];
    _appkeyLabel.text=appkeyStr;
    [self.view addSubview:_appkeyLabel];
    
    
    UIButton* webViewBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    webViewBtn.backgroundColor = [UIColor lightGrayColor];
    webViewBtn.frame = CGRectMake(20, 450, 200, 30);
    [webViewBtn addTarget:self action:@selector(webViewClick) forControlEvents:(UIControlEventTouchUpInside)];
    [webViewBtn setTitle:@"跳转webView" forState:(UIControlStateNormal)];
    [self.view addSubview:webViewBtn];
    
    
    UIButton* newViewBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    newViewBtn.backgroundColor = [UIColor lightGrayColor];
    newViewBtn.frame = CGRectMake(230, 450, 100, 30);
    [newViewBtn addTarget:self action:@selector(newViewClick) forControlEvents:(UIControlEventTouchUpInside)];
    [newViewBtn setTitle:@"跳转newView" forState:(UIControlStateNormal)];
    [self.view addSubview:newViewBtn];
    
    
    UILabel *setLabel=[[UILabel alloc]init];
    [setLabel setFont:[UIFont fontWithName:@"Helvetica-Bold" size:20]];
    setLabel.frame = CGRectMake(20, 470, 100, 50);
    setLabel.text=@"基础配置:";
    [self.view addSubview:setLabel];

}

#pragma mark --收起键盘
// 滑动空白处隐藏键盘
- (void)scrollViewWillBeginDragging:(UIScrollView *)scrollView {
    [self.view endEditing:YES];
}

// 点击空白处收键盘
-(void)fingerTapped:(UITapGestureRecognizer *)gestureRecognizer {
    [self.view endEditing:YES];
}

-(void)webViewClick
{
    [UMSpm updateNextPageProperties:@{@"native_transfor_arg":@"native_transfor_value"}];
    UMWKWebViewController *vc = [[UMWKWebViewController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
}
-(void)newViewClick
{
    UMNewViewController *vc = [[UMNewViewController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
}


-(void)domainClick
{
    [UMDemoUtils sharedInstance].domain=_domainText.text;
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setValue:[UMDemoUtils sharedInstance].domain forKey:@"UMDomain"];
    [defaults synchronize];
    [UMConfigure setCustomDomain:[UMDemoUtils sharedInstance].domain standbyDomain:nil];
    _domainLabel.text= [UMDemoUtils sharedInstance].domain;
}


-(void)appkeyClick
{
    [UMDemoUtils sharedInstance].appkey=_appkeyText.text;
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setValue:[UMDemoUtils sharedInstance].appkey forKey:@"UMAppkey"];
    [defaults synchronize];
    _appkeyLabel.text= [UMDemoUtils sharedInstance].appkey;
}
-(void)loginClick
{
    [MobClick event:@"UserLogin" attributes:@{@"user_id":_loginText.text}];
    if ([UMDemoUtils notEmptyString:_loginText.text]) {
        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        [defaults setValue:_loginText.text forKey:@"UMDemoId"];
        [defaults synchronize];
        NSString * loginStr =[[NSString alloc]initWithFormat:@"当前登录用户ID:%@",[defaults objectForKey:@"UMDemoId"]];
        [MobClick profileSignInWithPUID:_loginText.text];
        _idLabel.text=loginStr;
        _loginText.text=@"";

    }
}

-(void)logoutClick
{
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setValue:@"" forKey:@"UMDemoId"];
    [defaults synchronize];
    [MobClick profileSignOff];
    _idLabel.text=@"当前登录用户ID:";

}

-(void)propertClick
{
    [MobClick event:@"SetParam"];

    NSString *str=_propertText.text;
    NSMutableDictionary *dic=[[NSMutableDictionary alloc]init];

    if ([UMDemoUtils notEmptyString:str]) {
        NSArray *arr = [str componentsSeparatedByString:@"="];
        if ([arr count]>1) {
            [dic setValue:arr[1] forKey:arr[0]];
//            for (NSInteger i=0; i<[arr count]; i++) {
//                NSArray *objArr = [arr[i] componentsSeparatedByString:@":"];
//                if ([objArr count]>0) {
//                    [dic setValue:objArr[1] forKey:objArr[0]];
//                }
//
//            }
        }
        
        

    }
    [MobClick registerGlobalProperty:dic];
//    [MobClick registerSuperProperty:dic];
    NSString * propertStr =[[NSString alloc]initWithFormat:@"当前全局参数:%@",[UMDemoUtils JSONFragment:[MobClick getGlobalProperties]]];
    _propertText.text=@"";
    _propertLabel.text=propertStr;

}

-(void)clearClick
{
    [MobClick clearGlobalProperties];
    NSString * propertStr =[[NSString alloc]initWithFormat:@"当前全局参数:%@",[UMDemoUtils JSONFragment:[MobClick getSuperProperties]]];

    _propertLabel.text=propertStr;
    
}

-(void)searchClick
{
    [MobClick event:@"SearchBtn" attributes:@{@"keyword":_sText.text}];
    [UMSpm updateNextPageProperties:@{@"ref_keyword":_sText.text,@"homepage_version":@"1.0"}];
    UMListViewController *vc = [[UMListViewController alloc]init];
    vc.sKey=_sText.text;
    [self.navigationController pushViewController:vc animated:YES];
}


//协议方法回调
-(void)pushScrollVAction:(NSInteger)valueTag{
    NSLog(@"跳转delegates:%ld",valueTag);
    [UMSpm updateNextPageProperties:@{@"ref_index":@(valueTag),@"homepage_version":@"1.0"}];
    UMContentController *vc = [[UMContentController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
    
}
-(void)pageNum:(NSInteger)pageNum{
    page.page = pageNum;
    NSString *topView=NSStringFromClass([[self topViewController] class]);
    if ([topView isEqualToString:@"UMMainViewController"] ) {
        

        BOOL isbool = [_pageArr containsObject:@(pageNum)];
        if (!isbool) {
            [MobClick event:@"ShowBanner" attributes:@{@"index":@(pageNum)}];
            [_pageArr addObject:@(pageNum)];
        }
    //    NSLog(@"当前page：%ld---%@",(long)pageNum,[self topViewController]);;

    }else{
        [_pageArr removeAllObjects];
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (UIViewController*)topVC:(UIViewController*)VC {

    if([VC isKindOfClass:[UINavigationController class]]) {

        return[self topVC:[(UINavigationController*)VC topViewController]];

    }

    if([VC isKindOfClass:[UITabBarController class]]) {

        return[self topVC:[(UITabBarController*)VC selectedViewController]];

    }

    return VC;

}

 

- (UIViewController*)topViewController {

    UIViewController*vc = [self topVC:[UIApplication sharedApplication].keyWindow.rootViewController];

    while(vc.presentedViewController) {

        vc = [self topVC:vc];

    }

    return vc;

}


- (void)keyboardWillShow:(NSNotification *)note
{
    // 1.取出键盘的高度
    CGRect temp  = [note.userInfo[UIKeyboardFrameEndUserInfoKey] CGRectValue];
    CGFloat height = temp.size.height;
    // 2.让工具条向上平移
    // 2.1取出键盘弹出的动画时间
    NSTimeInterval timte = [note.userInfo[UIKeyboardAnimationDurationUserInfoKey] doubleValue];
    [UIView animateWithDuration:timte delay:0 options:7 << 16 animations:^{
     //   self.bottomBar.transform = CGAffineTransformMakeTranslation(0, -height);
        if (_isShow==NO) {
            CGRect tem=self.view.frame;
            tem.origin.y = tem.origin.y - 200.0;
            self.view.frame=tem;
            _isShow=YES;
        }
        
       
    } completion:nil];
    
}
/**
 *  键盘隐藏
 */
- (void)keyboardWillHide:(NSNotification *)note
{
    // 2.1取出键盘弹出的动画时间
    NSTimeInterval timte = [note.userInfo[UIKeyboardAnimationDurationUserInfoKey] doubleValue];
    
    // 清空transform
    [UIView animateWithDuration:timte delay:0 options:7 << 16 animations:^{
        CGRect tem=self.view.frame;
        tem.origin.y = 0;
        self.view.frame=tem;
        
     //   self.bottomBar.transform = CGAffineTransformIdentity;
    } completion:^(BOOL finished) {
        _isShow=NO;
    }];
    
}


+(id) perform:(id) obj withClass:(NSString*) classString withMethod:(NSString*) method withObjects:(NSArray *)objects {
    id __unsafe_unretained returnValue = nil;
    id value = nil;
    Class asClass = NSClassFromString(classString);
    if (asClass) {
        SEL aSelector = NSSelectorFromString(method);
        
        NSMethodSignature* sig = nil;
        NSInvocation *invocation = nil;
        // for object
        if (obj && [obj respondsToSelector:aSelector] == YES) {
            sig = [obj methodSignatureForSelector:aSelector];
            invocation = [NSInvocation invocationWithMethodSignature:sig];
            [invocation setTarget:obj];
        } else if ([asClass respondsToSelector:aSelector] == YES) {
            // for class
            sig = [asClass methodSignatureForSelector:aSelector];
            invocation = [NSInvocation invocationWithMethodSignature:sig];
            [invocation setTarget:asClass];
        } else {
            return nil;
        }
        [invocation setSelector:aSelector];
        
        NSInteger paramsCount = sig.numberOfArguments - 2;
        paramsCount = MIN(paramsCount, objects == nil ? 0 : objects.count);
        for (NSInteger i = 0; i < paramsCount; i++) {
            id object = objects[i];
            if ([object isKindOfClass:[NSNull class]]) continue;
            [invocation setArgument:&object atIndex:i + 2];
        }
        [invocation invoke];
        
        const char *returnType = sig.methodReturnType;
        if(!strcmp(returnType, @encode(void)) ){
            return nil;
        } else if( !strcmp(returnType, @encode(id)) ){
            [invocation getReturnValue:&returnValue];
            value = returnValue;
        } else {
            NSUInteger length = [sig methodReturnLength];
            void *buffer = (void *)malloc(length);
            [invocation getReturnValue:buffer];
            if(!strcmp(returnType, @encode(BOOL))) {
                value = [NSNumber numberWithBool:*((BOOL*)buffer)];
            } else if( !strcmp(returnType, @encode(NSInteger)) ) {
                value = [NSNumber numberWithInteger:*((NSInteger*)buffer)];
            } else if( !strcmp(returnType, @encode(float)) ) {
                value = [NSNumber numberWithFloat:*((float*)buffer)];
            } else {
                value = [NSValue valueWithBytes:buffer objCType:returnType];
            }
        }
    }
    
    return value;
}
@end
