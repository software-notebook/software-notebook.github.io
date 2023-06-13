---
title : API Basics
sidebar_position: 1
---
## 1. Define API as a Product
The well defined APIs have following characteristics.
- Usable
    - Ease to use.
- Simple
    - Easy to understand.
- Predictable
    - Adheres to industry guidelines and predictable (e.g. REST standards).
- Stable
    - Doesn't change often.
- Purpose Driven
    - Solve specific business problem or use case.
- Well-defined API boundries
    - Do one thing, do it well.
    - Avoid overloading the API with too many functionality.
    
## Guidelines
- Use Outside-In approach while designing the APIs as we need to think from the user's pespective who is going to consume this API and integrate with it.
- Governances
    - Release Notes
        - Publish the release notes with clients about API contract changes.
    - Backward compatiblity
        - Keep the backward compatiblity in mind while designing solutions. 
        - If not possible, make breaking changes as additive to original API. Old client can continue to use old fields till migrated to new fields.
        - As a last resort, think about defining the next version of APIs.
    - Versioning
        - Upgrade Major Version for significant changes or backward incompatible changes.
    - Rollback and Fix forward starategies
        - Plan for unknown issues.