# Database Notes

## Query Driven Data Model
- If an application has high volume for read traffic then its better to consider [Query Driven Data Model](https://hackolade.com/help/Query-drivendatamodelingbasedona.html) as this approach has better performance because 1. All the data is co-lated in the same disk/partition 2. All the data is part of same lookup document so no joins are data stiching is required at run-time.

Use Cases

- Flight Status Summary - There could be hundreds of devices where the same information 

## 
- Storing health tracker data.
- Storing time series data (as long as you do your own aggregates).
- Tracking pretty much anything including order status, packages etc.

- Weather service history.
- Internet of things status and event history.
- Telematics: IOT for cars and trucks.
- Email envelopes—not the contents.