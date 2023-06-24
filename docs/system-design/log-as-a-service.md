# Design a Log Service

### High Level Design
- The logging infrasture can be decomposed around following tasks
    - Logs Collection - A consumer invokes the apis of the logger for storing the logs (local / remote etc.)
    - Logs Publication - The logger needs to send the logs to 

[Facebook - Scribe System Design](https://engineering.fb.com/2019/10/07/data-infrastructure/scribe/)

[Elastic Search - Logstash](https://www.elastic.co/guide/en/logstash/current/deploying-and-scaling.html)

[Quickwit Architecture](https://quickwit.io/docs/main-branch/overview/architecture)