//
//  UMWKWebViewController.m
//  UMMobClick
//
//  Created by wangkai on 2021/3/30.
//  Copyright © 2021 UMeng. All rights reserved.
//

#import "UMWKWebViewController.h"
#import <WebKit/WebKit.h>

#import <UMCommon/MobClick.h>
#import <UMSpm/UMSpmHybrid.h>
@interface UMWKWebViewController () <WKNavigationDelegate>

@end
@implementation UMWKWebViewController
{
    WKWebView *webView;

}

- (void)viewDidLoad
{
    [super viewDidLoad];
    //是否统计H5数据开关
 //   [UMSpmHybrid setWebViewEnabled:NO];
    CGRect mainScreenRC = [UIScreen mainScreen].bounds;

    // Do any additional setup after loading the view.
    [UMSpmHybrid skipMe:self pageName:@"pageWeb"];
    webView =[[WKWebView alloc] initWithFrame:CGRectMake(0, 20, mainScreenRC.size.width, mainScreenRC.size.height)];
    webView.navigationDelegate = self;
    webView.UIDelegate = self;
    [self.view addSubview:webView];
    
    NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    NSURL *url = [NSURL fileURLWithPath:path];
    
    //修改h5域名
  //  NSURL *url=[NSURL URLWithString:@"https://www.umeng.com"];
    
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    [webView loadRequest:request];
    
   
}

- (void)viewDidAppear:(BOOL)animated
{
    
    [super viewDidAppear:animated];
    [MobClick beginLogPageView:@"pageWeb"];
    

}


- (void)viewDidDisappear:(BOOL)animated
{
    [super viewDidDisappear:animated];

    [MobClick endLogPageView:@"pageWeb"];
}
@end
