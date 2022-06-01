//
//  UMContentController.m
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//

#import "UMContentController.h"
#import "UMMainViewController.h"
#import "UMListViewController.h"
#import <UMCommon/MobClick.h>
#import <UMSpm/UMSpm.h>
#import "UMDemoUtils.h"
@implementation UMContentController

- (void)viewDidAppear:(BOOL)animated
{
    
    [super viewDidAppear:animated];
    [UMDemoUtils sharedInstance].pageName=@"PageAct001";

    [MobClick beginLogPageView:@"PageAct001"];

}


- (void)viewDidDisappear:(BOOL)animated
{
    [super viewDidDisappear:animated];
    [MobClick endLogPageView:@"PageAct001"];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor whiteColor];
    self.title=@"活动页";
    
    //返回
    UIButton* backBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    backBtn.backgroundColor = [UIColor lightGrayColor];
    backBtn.frame = CGRectMake(20, 120, 120, 60);
    [backBtn addTarget:self action:@selector(backClick) forControlEvents:(UIControlEventTouchUpInside)];
    [backBtn setTitle:@"返回" forState:(UIControlStateNormal)];
    [self.view addSubview:backBtn];
    
    //去首页
    UIButton* indexBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    indexBtn.backgroundColor = [UIColor lightGrayColor];
    indexBtn.frame = CGRectMake(20, 200, 120, 60);
    [indexBtn addTarget:self action:@selector(indexClick) forControlEvents:(UIControlEventTouchUpInside)];
    [indexBtn setTitle:@"去首页" forState:(UIControlStateNormal)];
    [self.view addSubview:indexBtn];
    
    //去搜索页
    UIButton* searchBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
    searchBtn.backgroundColor = [UIColor lightGrayColor];
    searchBtn.frame = CGRectMake(20, 280, 120, 60);
    [searchBtn addTarget:self action:@selector(searchClick) forControlEvents:(UIControlEventTouchUpInside)];
    [searchBtn setTitle:@"去搜索页" forState:(UIControlStateNormal)];
    [self.view addSubview:searchBtn];
    
//    //刷新
//    UIButton* refreshBtn = [UIButton buttonWithType:(UIButtonTypeSystem)];
//    refreshBtn.backgroundColor = [UIColor lightGrayColor];
//    refreshBtn.frame = CGRectMake(20, 360, 120, 60);
//    [refreshBtn addTarget:self action:@selector(refreshClick) forControlEvents:(UIControlEventTouchUpInside)];
//    [refreshBtn setTitle:@"刷新" forState:(UIControlStateNormal)];
//    [self.view addSubview:refreshBtn];
    
}

-(void)backClick
{
    [MobClick event:@"GoBack"];
    [self.navigationController popViewControllerAnimated:YES];

}

-(void)indexClick
{
    [MobClick event:@"GoPageHome"];

    [self.navigationController popToRootViewControllerAnimated:YES];

//    UMMainViewController *vc = [[UMMainViewController alloc]init];
//    [self.navigationController pushViewController:vc animated:YES];
}

-(void)searchClick
{
    [MobClick event:@"GoPageSearch"];

    UMListViewController *vc = [[UMListViewController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
}
//-(void)refreshClick
//{
//    
//}

@end
