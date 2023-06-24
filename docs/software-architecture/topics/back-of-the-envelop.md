# Back of the envelop calculations

# Number of service instances calculation
- Target Traffic Per Day : 50 million requests
- Target Traffic Per Sec : 50 * 10^6 /(24 * 3600) = ~(50 * 10^6 / 25 * 4000) = ~(50 * 10^6 / 100,000) = ~500 
- Target Request Response time : 100 ms = 0.1 sec
- Total Requests per second = 1 / 0.1 sec = 10 requests per seconds
- Total number of threads in a service = 50 (assumption)
- Total throughput of the service = 50 * 10 = 500 requests per seconds per instance

The above number indicates that we will need one single instance of the service for meeting the target of 500 requests per seconds assuming that service is able to process each request in 100 ms.

However, its always good to keep multiple instances because of the following reasons

- No downtime should be required while releasing and deploying the new changes. In this case, we expect at least 2 instances.
- No downtime should be there for operationl reasons (site maintaince)
- No performance impact in case of spikes e.g. 30-40% of extra load.
- No single point of failure

So we can target three instances of the service.

# Storage calculation
- Average payload size for each request: (Payload size) 
    - Payload size - contains 1000 characters -> ~ 1000 * 2 Bytes -> 2000  Bytes -> 2 KB
- Total number of requests per day =  50 million
- Total storage requirements per day = 50 million * 2 KB -> ~ 50 * 10^6 * 2 / 10^6 GB -> ~ 100 GB
- Total storage requirements per year = 100 GB * 365 -> ~100 * 400 GB -> 4000 GB
- Total storage requirements for 5 years = 4000 GB * 5 = 20000 GB -> 20000 / 10^3 TB -> 20 TB

The above storage requirements is considering no redundency and its recommended to have at least 2 more redundent storage so total storage requirement is going to 60 TB for next 5 years.

Ref:
[Capacity planning for application design](https://wso2.com/whitepapers/capacity-planning-for-application-design-part-1/)
[Back of the envelop calculations](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)