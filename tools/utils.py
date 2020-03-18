import time
import os


def get_state_filepath(root_path, filename):
    year = time.strftime('%Y', time.localtime())
    month = time.strftime('%m', time.localtime())
    day = time.strftime('%d', time.localtime())
    # 日期地址
    date_path = year + '/' + month + '/' + day + '/'
    file_dir_path = root_path + date_path
    if not os.path.exists(file_dir_path):
        os.makedirs(file_dir_path)
    filePs = file_dir_path + filename
    return filePs, date_path