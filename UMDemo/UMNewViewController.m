//
//  UMWKWebViewController.m
//  UMMobClick
//
//  Created by wangkai on 2021/3/30.
//  Copyright © 2021 UMeng. All rights reserved.
//

#import "UMNewViewController.h"
#import <UMCommon/MobClick.h>
@interface UMNewViewController ()

@end
@implementation UMNewViewController
{

}

- (void)viewDidLoad
{
    [super viewDidLoad];
    UIButton* button = [UIButton buttonWithType:(UIButtonTypeSystem)];
    button.backgroundColor = [UIColor lightGrayColor];
    button.frame = CGRectMake(20, 250, 200, 30);
    [button addTarget:self action:@selector(buttonClick) forControlEvents:(UIControlEventTouchUpInside)];
    [button setTitle:@"点击事件" forState:(UIControlStateNormal)];
    [self.view addSubview:button];
    
   
}
-(void)buttonClick
{
    [MobClick event:@"newViewEvent"];
}


@end
