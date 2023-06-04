import urllib.parse
import urllib.request
from bs4 import BeautifulSoup

import time
import os.path
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from chromedriver_py import binary_path  # this will get you the path variable
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def get_books():
    url = "https://www.bookbeat.se/kategori/fakta-46054?format=audiobook&language=Swedish&language=English&sortBy=publishdate&sortOrder=desc"
    scrape_books(url)
    return 0


def scrape_books(url):
    service_object = Service(binary_path)
    driver = webdriver.Chrome(executable_path=binary_path)
    # webbrowser.open(full_url)
    # Use the appropriate WebDriver for your browser
    driver.get(url)
    WebDriverWait(driver, 10)  # Maximum wait time of 10 seconds
    html_content = driver.page_source
    soup = BeautifulSoup(html_content, "html.parser")
    print("s", soup)

    cards = soup.findAll("div", class_=lambda x: x and x.startswith("card_base__"))
    for card in cards:
        print(card, end="\n" * 2)

    driver.quit()
