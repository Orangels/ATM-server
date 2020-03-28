import cv2

path = 'rtsp://192.168.88.29:554/user=admin&password=admin&channel=1&stream=0.sdp?real_stream'

cap = cv2.VideoCapture(1)
suc = cap.isOpened()  # 是否成功打开
# 帧数
frame_count = 0
fps = int(cap.get(cv2.CAP_PROP_FPS))
print(fps)
suc, frame = cap.read()
cv2.imshow('test', frame)
cv2.waitKey()