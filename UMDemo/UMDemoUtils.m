//
//  UMDemoUtils.m
//  UMDemo
//
//  Created by wangkai on 2021/3/4.
//

#import "UMDemoUtils.h"

@implementation UMDemoUtils

+ (instancetype)sharedInstance
{
    static id sharedManager;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        sharedManager = [[self alloc] init];
    });
    return sharedManager;
}


- (instancetype)init
{
    if (self = [super init])
    {
        

    }
    return self;
}


+ (BOOL)notEmptyString:(NSString *)string
{
    BOOL bRet = YES;
    if ((string == nil) ||
        (string == NULL) ||
        ([string isKindOfClass:[NSNull class]]) ||
        (![string isKindOfClass:[NSString class]]) ||
        (([string isKindOfClass:[NSString class]])&&([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] length] == 0)))
    {
        bRet = NO;
    }
    return bRet;
}

+ (BOOL)isEmptyString:(NSString *)string
{
    return ![UMDemoUtils notEmptyString:string];
}


+ (NSString *)JSONFragment:(id)object
{
    //判断是否空值
    if (!object) {
        return nil;
    }
    
    //判断是否能转换json
    if (![NSJSONSerialization isValidJSONObject:object]) {
        return nil;
    }
    
    //此处 用@try @catch影响效率
    NSString *jsonString = nil;
    NSError *error = nil;
    NSData *jsonData = nil;
    jsonData = [NSJSONSerialization dataWithJSONObject:object
                                                       options:kNilOptions //TODO: NSJSONWritingPrettyPrinted  // kNilOptions
                                                         error:&error];
    if ([jsonData isKindOfClass:[NSData class]] && [jsonData length] && (error == nil))
    {
        jsonString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
    return jsonString;
}


@end
