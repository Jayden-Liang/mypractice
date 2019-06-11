import requests
from bs4 import BeautifulSoup
import bs4

r= requests.get('https://www.twreporter.org/a/tiananmen-june-fourth-incident-30-censored-keywords')
r.encoding = r.apparent_encoding
print(r.text)