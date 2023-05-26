# Availability
A system is said to be available if it continues to serve its customer as expected.

- No Single point of failures
    - Murphy's law : If anything can go wrong, it will go wrong so plan for failures and have proper fallback plan.
    - Plan for Multiple Instances, Multiple Availability Zones, Multiple Data Centers
    - Active-Active vs Active-Passive Architecture
    - Disaster Recovery Plan
    - Capacity Planning of the critial resources
        - In case of high traffic, system can become unresponsive leading to failures and availability issues.
- Stateless Systems
    - Move the traffic from Instance A to Instance B in case of failures without any customer friction.
- CAP Theorem
    - In case of distributed systems (partitoons), pick between availability vs consistency
- Fail Open vs Fail Close
    -   In case of failure, allow the customer to continue the business operations (e.g. allow customer to book order if inventory check fails instead of failing the order placement)
- Event Driven Architecture
    - The system will process the events as and when they are available as long as there is no message loss.

- Deployment Strategies - Avoid the bugs in new release that could impact the overall availability of the system.
	- Canary Release (one box testing)
		- Release is available to only few customers.
	- Blue / Black deployment
		- Traffic switchover between pool of services with new release artifact.
			- Traffic is redirected back to old in case of issues.
    - Ramp strategy
    - Feature toggling



