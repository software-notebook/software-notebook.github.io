# Maintainability

## Modularity
- Encapsulate the volatility
    - Hide the decisions that changes frequently (how part or the implementation level details)
    - Hide the requirement changes
- Seperate the statable part from unstable part
    - Stable part are provided to clients in the form of API.
    - Unstable parts are abstracted from clients so that they can be changed without any client side chagnes.
- Composable
    - Modules should work togather for enabling critical use cases.
- 

