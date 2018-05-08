from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import threading

app = Flask(__name__)

URL = "https://transitfeeds.com/p/port-authority-of-allegheny-county/274/latest/stops"
# stopIds = []
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getBusStopIds', methods=['POST'])
def get_bus_stopIds():
    placeName = request.json['placeName']
    # placeNameList = placeNames.split(",")
    # threadList = []
    # global stopIds
    # for placeName in placeNameList:
    index = placeName.find("(")
    if index != -1:
        placeName = placeName.strip()[0: index]
    print(placeName)
    # t = threading.Thread(target=helper, args=(placeName,))
    # t.start()
    # threadList.append(t)
    # for t in threadList:
    #     t.join()
    stopIds = helper(placeName)
    res = {
        "stopIds": stopIds
    }
    return jsonify(res)

def helper(placeName):
    stopIds = []
    res = requests.get(URL, params={'q': placeName.strip()},
                       headers={'Accept-Charset': 'utf-8', 'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
                                "user-agent": "ser-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"})
    root = BeautifulSoup(res.content, 'html.parser')
    tbody = root.find("tbody")
    if tbody:
        trs = tbody.find_all("tr")
        for tr in trs:
            stopId = tr.findAll("td")[1].get_text().strip()
            print(stopId + "--")
            stopIds.append(stopId)
        return  stopIds
    return stopIds

if __name__ == '__main__':
    app.run()
