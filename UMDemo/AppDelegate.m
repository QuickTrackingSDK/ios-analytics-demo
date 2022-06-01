//
//  AppDelegate.m
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//

#import "AppDelegate.h"
#import "UMMainViewController.h"
#import <UMCommon/UMConfigure.h>
#import <UMCommonLog/UMCommonLogManager.h>
#import <UMCommon/MobClick.h>
#import "UMDemoUtils.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    NSString *domain=[defaults objectForKey:@"UMDomain"];
    if ([UMDemoUtils isEmptyString:domain]) {
    
        [UMDemoUtils sharedInstance].domain=@"https://log-api.aplus.emas-poc.com";
   
    }else{
        [UMDemoUtils sharedInstance].domain=domain;
    }
    //appkey
    NSString *appkey=[defaults objectForKey:@"UMAppkey"];
    if ([UMDemoUtils isEmptyString:appkey]) {
        [UMDemoUtils sharedInstance].appkey=@"44624933";
    }else{
        [UMDemoUtils sharedInstance].appkey=appkey;
    }
    
    [UMCommonLogManager setUpUMCommonLogManager];
    [UMConfigure setLogEnabled:YES];
    [UMConfigure setAppVersion:@"9.9.9"];
    [UMConfigure setCustomDomain:[UMDemoUtils sharedInstance].domain standbyDomain:nil];
    [UMConfigure initWithAppkey:[UMDemoUtils sharedInstance].appkey channel:@"App Store"];
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    UMMainViewController *mainVC = [[UMMainViewController alloc] init];
    UINavigationController *NAV = [[UINavigationController alloc] initWithRootViewController:mainVC];
    self.window.rootViewController = NAV;
    [self.window makeKeyAndVisible];
    
    // Override point for customization after application launch.
    return YES;
}

-(void)applicationDidBecomeActive:(NSNotification *)notification
{
    if ([UMDemoUtils notEmptyString: [UMDemoUtils sharedInstance].pageName]) {
        [MobClick beginLogPageView:[UMDemoUtils sharedInstance].pageName];

    }
}

-(void)applicationWillResignActive:(NSNotification *)notification
{
    if ([UMDemoUtils notEmptyString: [UMDemoUtils sharedInstance].pageName]) {
        [MobClick endLogPageView:[UMDemoUtils sharedInstance].pageName];

    }
}

-(void)applicationWillTerminate:(NSNotification *)notification
{
    if ([UMDemoUtils notEmptyString: [UMDemoUtils sharedInstance].pageName]) {
        [MobClick endLogPageView:[UMDemoUtils sharedInstance].pageName];

    }
}

- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    if ([MobClick handleUrl:url]) {
        return YES;
    }

    return YES;
}
@end
