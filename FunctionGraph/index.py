# -*- coding:utf-8 -*-
# **************************************************
#  Reference:
#  1、Huawei MySQL Documents: https://support.huaweicloud.com/qs-rds/index.html
# ***************************************************
import json
import base64
import pymysql


def handler(event, context):
    logger = context.getLogger()
 
           
   
    user = context.getUserData('username')  # get username of mysql.
    password = context.getUserData('password')  # get password of mysql.
    host = context.getUserData('host')  # get host of mysql.
    port = int(context.getUserData('port'))  # get port of mysql.
    database = context.getUserData('database')  # get database of mysql
    try:
        conn = pymysql.connect(  # connect to mysql.
            user=user,
            password=password,
            host=host,
            port=port,
            database = database,
            charset='utf8'
        )
    except Exception as e:
        logger.info("connect database error:%s" % e)
        return {"code": 400, "errorMsg": "internal error %s" % e}


    with conn.cursor() as cursor:
    
 
 
       
        sql = "INSERT INTO users (`ID`, `Name`, `Payment`, `ProductID`) VALUES (%s, %s, %s, %s)"
 
        cursor.execute(sql, (event['queryStringParameters']['ID'], event['queryStringParameters']['Name'], event['queryStringParameters']['Payment'], event['queryStringParameters']['ProductID']))
 
        conn.commit()
       
        cursor.close()
        

        
        
    return {
        "statusCode": 200,
        "isBase64Encoded": False,
        "headers":{},
        "body": json.dumps(event)
        }