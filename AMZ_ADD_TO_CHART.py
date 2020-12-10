print("Starting program....")
import time

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

web_driver = webdriver.Chrome(ChromeDriverManager().install())

# Initialize Variables(As per users desire)

amz_url = "http://www.amazon.com"

amz_search_field_id = "twotabsearchtextbox"
product_to_purchase_xpath = "//span[@class='a-size-base-plus a-color-base a-text-normal']"
add_to_chart_button_id = "add-to-cart-button"
chart_number_of_items_id = "nav-cart-count"

number_of_items_included = 0
product_to_search = "martillo"


#==================== Functions or Methods Definition ============

def go_to_url():

  try:
   
    web_driver.maximize_window()
    web_driver.get(amz_url)

    print("\n==================== Test Results: =================================\nSuccessfully launched url: " + amz_url)

  except:

    print("\nFailed to launch url: " + amz_url)


def search_for_product():

  try:
   
    get_amz_search_field = web_driver.find_element_by_id(amz_search_field_id) 
    get_amz_search_field.send_keys(product_to_search) 
    get_amz_search_field.submit()
    
    print("\nSuccessfully searched for product: '" + product_to_search + "' in the url: " + amz_url)

  except:

    print("\nFailed to search for product: '" + product_to_search + "' in the url: " + amz_url)

def add_product_to_chart():

 try:

   get_items_from_result_list = web_driver.find_element_by_xpath(product_to_purchase_xpath)  
   get_items_from_result_list.click()
   time.sleep(1)

   add_to_chart_button = web_driver.find_element_by_id(add_to_chart_button_id) 
   add_to_chart_button.click()

   print("\nSuccessfully selected first product from the amz product list returned during the product search. Clicked on the 'add_to_chart' button")
  
 
 except:

    print("\nFailed to add the following product: " + product_to_search + " to the amazon chart")


def validate_purchase():

  try:

     number_of_items_included = web_driver.find_element_by_id(chart_number_of_items_id).text

     print("\nNumber of items included in the chart: " + number_of_items_included)

     if (int(number_of_items_included) > 0):

       print("\n====== Congrats!!. At least one product has been added to the chart successfully")

     else:

       print("\n****** Failed to add at least one item to the chart. No items were found in the chart")
  
  except:
     
     print("\nFailed during counting the number of items included in the chart when purchasing the following product: " + product_to_search + ".Such product was not added as expected" )

  print("\n....... Chrome Browser will be closed in about 10 seconds ..... ")

  time.sleep(10)
  web_driver.quit() 

#==================== Main Program ============

go_to_url()

search_for_product()

add_product_to_chart()

validate_purchase()

