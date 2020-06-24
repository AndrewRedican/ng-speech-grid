# https://data.gov.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail
# http://api.irishrail.ie/realtime/index.htm?realtime_irishrail

Irish Rail Realtime API's information page
This information is an estimate of train times based on:
The current location of train services from Iarnród Éireann's central signalling system.
The scheduled journey times from areas under local signalling control.
Trains indicated as being late can make up time and arrive on time. Ensure you give yourself plenty of time to catch your train.
Our central signalling system is subject to ongoing work to support this real-time facility. However real-time information has weaker coverage in certain areas, these include:

Athlone - Westport/Ballina Line
Cork Station
Cork - Cobh/Midleton Line
Mallow - Tralee Line
Ballybrophy - Limerick Line
Limerick - Ennis Line
Limerick Junction - Waterford Line
Greystones - Rosslare Line
Dundalk - Belfast Line
In these cases your query will return the scheduled time only.

The following functions are available
1. Get All Stations - usage http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML returns a list of all stations with StationDesc, StaionCode, StationId, StationAlias, StationLatitude and StationLongitude ordered by Latitude, Longitude

2. Get All Stations with Type http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=D returns a list of all stations with StationDesc, StaionCode, StationId, StationAlias, StationLatitude and StationLongitude ordered by Latitude, Longitude filtered by StationType - takes a single letter with 4 possible values for the StationType parameter (A for All, M for Mainline, S for suburban and D for DART) any other value will be changed to A

3. Get Current Trains - usage http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML returns a listing of 'running trains' ie trains that are between origin and destination or are due to start within 10 minutes of the query time. Returns TrainStatus, TrainLatitude, TrainLongitude, TrainCode, TrainDate, PublicMessage and Direction

TrainStatus = N for not yet running or R for running

TrainCode is Irish Rail's unique code for an individual train service on a date

Direction is either Northbound or Southbound for trains between Dundalk and Rosslare and between Sligo and Dublin.  for all other trains the direction is to the destination eg. To Limerick

Public Message is the latest information on the train uses \n for a line break eg AA509\n11:00 - Waterford to Dublin Heuston (0 mins late)\nDeparted Waterford next stop Thomastown

4. Get Current Trains with Type usage http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML_WithTrainType?TrainType=D returns a listing of 'running trains' ie trains that are between origin and destination or are due to start within 10 minutes of the query time. Returns TrainStatus, TrainLatitude, TrainLongitude, TrainCode, TrainDate, PublicMessage and Direction filtered by traintype,  takes a single letter with 4 possible values for the StationType parameter (A for All, M for Mainline, S for suburban and D for DART) any other value will be changed to A

5. Get Station Data By Name usage http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=Bayside returns all trains due to serve the named station in the next 90 minutes

6. Get Station Data By Name with Number of Minutes usage http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=Bayside&NumMins=20 returns all trains due to serve the named station in the next x minutes (x must be between 5 and 90)

7. Get Station Data by StationCode usage http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML?StationCode=mhide returns all trains due to serve the named station in the next 90 minutes

8. Get Station Data by StationCode with number of minutes usage http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML_WithNumMins?StationCode=mhide&NumMins=20 returns all trains due to serve the named station in the next x minutes (x must be between 5 and 90)

The above four queries all return the same data as follows

ServerTime - the time on the server

TrainCode - Unique Id for the train

StationFullName - Long version of Station Name (identical in every record)

StationCode - 4 to 5 letter station abbreviation

QueryTime - The time the query was made

TrainDate - The date the service started its journey ( some trains run over midnight)

Origin

Destination

OriginTime - The time the train left (or will leave) its origin

DestinationTime - the scheduled time at its destination

Status - Latest information on this service

LastLocation (Arrived|Departed StationName)

DueIn - Num of minutes till the train will arrive here

Late - Minutes late

ExpArrival - the trains expected arrival time at the query station updated as the train progresses ( note will show 00:00 for trains starting from query station)

ExpDepart - the trains expected departure time at the query station updated as the train progresses ( note will show 00:00 for trains terminating at query station)

SchArrival - the scheduled arrival time ( note will show 00:00 for trains starting from query station)

schDepart - the scheduled depart time ( note will show 00:00 for trains terminating at query station)

Direction - Northbound, Southbound or To Destination

Train Type - DART - Intercity etc

LocationType - O = Origin, D = Destination, S= Stop

9. Get Stations Filter usage http://api.irishrail.ie/realtime/realtime.asmx/getStationsFilterXML?StationText=br returns a list of station names that contain the StationText

10. Get Train Movements usage http://api.irishrail.ie/realtime/realtime.asmx/getTrainMovementsXML?TrainId=e109&TrainDate=21 dec 2011 returns all stop information for the given train as follows

TrainCode

TrainDate

LocationCode

LocationFullName

LocationOrder

LocationType O= Origin, S= Stop, T= TimingPoint (non stopping location) D = Destination

TrainOrigin

TrainDestination

ScheduledArrival

ScheduledDeparture

Arrival (actual)

Departure (actual)

AutoArrival (was information automatically generated)

AutoDepart

StopType C= Current N = Next

Please note all these webservice names and parameters are case sensitive

Irish Rail provides this information as is and do not offer any support
