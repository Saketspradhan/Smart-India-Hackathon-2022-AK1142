from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime
import requests
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/WeatherAPI/<string:portnumber>")
@cross_origin()
def WeatherAPI(portnumber):
    portnumber = int(portnumber)
    if portnumber >= 12: portnumber = 5

    # Reference Numbers
    ports = {
        0 : 'Deendayal Port Trust, Kandla, Gujarat',
        1 : 'Paradip Port Authority, Paradeep, Odisha',
        2 : 'Jawaharlal Nehru Port Trust, Navi Mumbai, Maharashtra',
        3 : 'Visakhapatnam Port Trust, Vizag, Andhra Pradesh',
        4 : 'Mumbai Port Trust, Mumbai, Maharashtra',
        5 : 'Syama Prasad Mookerjee Port Trust, Kolkata, West Bengal',
        6 : 'Chennai Port Trust, Chennai, Tamil Nadu',
        7 : 'New Mangaluru Port Trust, Mangaluru, Karnataka',
        8 : 'V.O. Chidambaranar Port Trust, Thoothukudi, Tamil Nadu',
        9 : 'Cochin Port Trust, Kochi, Kerala',
        10 : 'Kamarajar Port Limited, Chennai Ennore, Tamil Nadu',
        11 : 'Mormugao Port Trust, Margao, Goa'    
    }

    BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
    API_KEY = "cdefc5b4bb3636aae31d7989846316f6"
    PLACE = ['Kāndla,Gujarat', 
            'Paradip,Odisha',
            'Vashi,Mumbai,Maharashtra', 
            'Visakhapatnam,AndhraPradesh',
            'Mumbai,Maharashtra', 
            'Kolkata,WestBengal',
            'Chennai,TamilNadu', 
            'Mangaluru,Karnataka', 
            'Thoothukudi,TamilNadu',
            'Kochi,Kerala',
            'Chennai,TamilNadu',
            'Margaon,Goa']

    def kelvin_to_celsius_fahrenheit(kelvin):
        celsius = kelvin - 273.15
        fahrenheit = celsius * (9/5) + 32
        return celsius, fahrenheit

    def degToCompass(num):
        val=int((num/22.5)+.5)
        arr=["East","East North East","North East","North North East",
            "North","North North West","North West","West North West",
            "West","West South West","South West","South South West",
            "South","South South East","South East", "South South East"]
        return arr[(val % 16)]

    def kmph_to_mps(kmph): return (0.277778 * kmph)
    def mps_to_kmph(mps): return (3.6 * mps)
    
    url = BASE_URL + "q=" + PLACE[portnumber] + "&APPID=" + API_KEY
    response = requests.get(url).json()
    # print(response['cod'])

    if response['cod'] == 200:
        
        name = response['name']

        #######
        cordinates_longitude = response['coord']['lon']
        coordinates_latitude = response['coord']['lat']

        #######
        description1 = (response['weather'][0]['main']).title()
        description2 = (response['weather'][0]['description']).title()

        #######
        temp_kelvin = response['main']['temp']
        temp_celsisus, temp_fahrenheit = kelvin_to_celsius_fahrenheit(temp_kelvin)
        feels_like_kelvin = response['main']['feels_like']
        feels_like_celsius, feels_like_fahrenheit = kelvin_to_celsius_fahrenheit(feels_like_kelvin)

        temp_min_kelvin = response['main']['temp_min']
        temp_min_celsisus, temp_min_fahrenheit = kelvin_to_celsius_fahrenheit(temp_min_kelvin)

        temp_max_kelvin = response['main']['temp_max']
        temp_max_celsisus, temp_max_fahrenheit = kelvin_to_celsius_fahrenheit(temp_max_kelvin)

        try: pressure = response['main']['pressure']
        except: pressure = "1000"
        try: humidity = response['main']['humidity'] 
        except: humidity = "50"

        #######
        visibility = str(response['visibility']) + " meters"
        if visibility == "10000 meters": visibility = '10000 meters (Maximum)'

        #######
        wind_speed_metric = response['wind']['speed']
        wind_speed_kmph = round(mps_to_kmph(wind_speed_metric), 2)
        wind_angle = float(response['wind']['deg'])
        wind_direction = degToCompass(wind_angle)

        try: gust_speed_metric = response['wind']['gust'] 
        except: gust_speed_metric = "0.00"
        try: gust_speed_kmph = round(mps_to_kmph(float(gust_speed_metric)), 2)
        except: gust_speed_kmph = "0.00"

        #######
        clouds = response['clouds']['all']

        #######
        sunrise_time = response['sys']['sunrise'] + response['timezone']
        sunrise_time = datetime.utcfromtimestamp(sunrise_time).strftime('%H:%M:%S IST %d-%m-%Y')

        sunset_time = response['sys']['sunset'] + response['timezone']
        sunset_time = datetime.utcfromtimestamp(sunset_time).strftime('%H:%M:%S IST %d-%m-%Y')

        results = {
            "Latitude" : str(coordinates_latitude) + "° N",
            "Longitude" : str(cordinates_longitude) + "° E",
            "Weather_1" : str(description1),
            "Weather_2" : str(description2),

            "Absolute_Temperature_Celsius" : str(round(temp_celsisus, 2)) + "°C", 
            "Absolute_Temperature_Fahrenheit" : str(round(temp_fahrenheit, 2)) + "°F",
            "Ground_Temperature_Celsius" : str(round(feels_like_celsius, 2)) + "°C",
            "Ground_Temperature_Fahrenheit" : str(round(feels_like_fahrenheit, 2)) + "°F",
            "Minimum_Daily_Temperature_Celsius" : str(round(temp_min_celsisus, 2)) + "°C",
            "Minimum_Daily_Temperature_Fahrenheit" :str(round(temp_min_fahrenheit, 2)) + "°F",
            "Maximum_Daily_Temperature_Celsius" : str(round(temp_max_celsisus, 2)) + "°C",
            "Maximum_Daily_Temperature_Fahrenheit" : str(round(temp_max_fahrenheit, 2)) + "°F",
            
            "Pressure" : str(pressure) + " hPa",
            "Humidity" : str(humidity) + "%",

            "Wind_Metric" : str(wind_speed_metric) + " m/s", 
            "Wind_Kmph" : str(wind_speed_kmph) + " Km/h",
            "Wind_Angle" : str(wind_angle) + "°",
            "Wind_Direction" : str(wind_direction),
            "Gust_Speed_Metric" : str(gust_speed_metric) + " m/s",
            "Gust_Speed_Kmph" : str(gust_speed_kmph) + " Km/h",

            "Visibility" : str(visibility),
            "Cloud Cover": str(clouds) + "%",
            "Sunrise" : str(sunrise_time),
            "Sunset" : str(sunset_time) 
        }

        # print(results)
        json_object = json.dumps(results, ensure_ascii = False, indent=4)
        # print(json_object)

    elif response['cod'] == 401 or response['cod'] == 404: json_object = {}
    return json_object


if __name__ == "__main__":
    app.run(debug=False)
