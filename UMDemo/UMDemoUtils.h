//
//  UMDemoUtils.h
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
NS_ASSUME_NONNULL_BEGIN

@interface UMDemoUtils : NSObject
@property(copy) NSString *pageName;
@property(copy) NSString *domain;
@property(copy) NSString *appkey;


+ (BOOL)notEmptyString:(NSString *)string;
+ (BOOL)isEmptyString:(NSString *)string;

+ (NSString *)JSONFragment:(id)object;
+ (UMDemoUtils *)sharedInstance;

@end

NS_ASSUME_NONNULL_END
