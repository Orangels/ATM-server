import requests
import json
import time
import sys
import traceback
import cv2
import requests
from urllib.parse import quote


def generate_path():
    path = '/Users/liusen/Documents/sz/ATM/ATMServer/static/videos/ATM_test.mp4'
    cap = cv2.VideoCapture(path)
    suc = cap.isOpened()  # 是否成功打开
    suc, frame = cap.read()
    path = ''
    if suc:
        fileName = '{}.jpg'.format(int(time.time()*1000))
        path = '/Users/liusen/Documents/sz/ATM/ATMServer/static/uploads/{}'.format(fileName)
        cv2.imwrite(path, frame)
    cap.release()
    return fileName


def upload_path(path):
    url = 'http://127.0.0.1:5000/waring_img'
    data_1 = dict(path=path, mode=1)
    data_2 = dict(path=path, mode=2)
    data_3 = dict(path=path, mode=3)
    headers = {'Content-Type': 'application/json'}
    # data = json.dumps(dict(params=[data_1, data_2, data_3]), ensure_ascii=False)
    post_json = json.dumps(dict(params=[data_1, data_2, data_3]))

    data = quote(post_json)
    r = requests.post(url, headers=headers, data=data)
    print(r.text)


if __name__ == '__main__':
    fileName = generate_path()
    upload_path(fileName)