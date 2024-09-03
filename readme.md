# YouthxHack Submission by Group Youthhaxorz: Sourcefood

## Introduction

Food insecurity in Singapore is a challenge within the context of Total Defence. Despite the country's prosperity, certain segments of the population struggle to access affordable, nutritious food. This issue arises from various factors, such as income inequality, rising living costs, and the increasing demand for food resources. Enhancing the resilience and efficiency of the supply chain is critical to addressing these issues. By further improving the distribution of food resources, we can work towards a more equitable food system.

## Problem Statement

Our research has revealed that food wastage within food-aid organizations often results from the improper distribution of donated food. Food that is given directly to recipients may not always align with their dietary requirements or preferences, leading to wastage. To address this problem, we aim to streamline the supply chain through enhanced information sharing between food-aid organizations, F&B companies and or organisations with surplus food, and consumers. Our goal is to ensure that recipients of food aid receive appropriate, nutritious, and safe food tailored to their specific dietary needs.

## Target Audience

Our solution primarily targets:

1. **Low-income families:** To help alleviate food insecurity by providing them with access to nutritious and appropriate food.
2. **Elderly residents in old folks' homes:** To cater to the dietary needs of the aging population, ensuring they receive suitable and safe food.
3. **Other vulnerable groups:** Individuals and communities facing food insecurity due to various socio-economic factors.

## Solution

### Plan

We plan to execute our solution in three stages:

#### Stage 1: Pilot Phase

- Conduct surveys to identify areas with high food insecurity.
- Use a food consumption index and other tools to measure food insecurity levels in these areas.
- Implement our program, **SourceFood**, in the identified areas.
- Partner with NGOs that generate large amounts of food waste due to inappropriate food allocation.
- Focus on optimizing existing food-aid programs within these NGOs.

#### Stage 2: Expansion and Fine-tuning

- Adjust our approach based on participation rates and feedback from Stage 1.
- Expand partnerships to include hawker centers, bakeries, and supermarkets.
- Integrate these partners into our platform.
- Collect data from Stage 1 to refine our food allocation algorithms.
- Perform quality checks on food provided by new partners before onboarding them.
- Refine our Reinforcement Learning algorithm to better forecast demand and supply.

#### Stage 3: Full-scale Launch

- Launch the program across Singapore.
- Open the platform to all businesses wishing to contribute.
- Introduce a volunteering platform to the general public.

### How Our Initial Data Collection Works

1. **Food Inventory Data**
   - **Types of Food:** Information on the types of food available for donation.
   - **Quantity:** The amount of each food type available for donation.
   - **Expiration Dates:** Tracking the perishability of food items to prioritize those that need to be distributed quickly.

2. **Operational Data**
   - **Daily Production and Waste Reports:** Data on the amount of food produced daily and the amount that goes unsold or wasted.
   - **Peak Hours of Operation:** Understanding when food surplus is likely to occur.

3. **Beneficiary Profiles**
   - **Dietary Needs:** Information on the dietary restrictions and preferences of beneficiaries.

### How We Plan to Solve Food Insecurity and Food Waste

We aim to reduce food waste by collaborating with food-aid organizations, hawker centers, bakeries, restaurants, and hotels to list uneaten food that is still safe for consumption on our platform. We have developed a dashboard to better understand the demographics of those who sign up on our platform. Food items will be listed on the website with details such as expiration dates and suitability information to ensure targeted and efficient food allocation.

We will utilize the Oracle Autonomous Database to automatically match available food with user profiles. An algorithm will consider factors such as distance, food type, caloric intake, and age/medical suitability to determine the most efficient food allocation. This approach ensures that individuals receive food that is suitable, safe, and nutritious.

Our algorithm will also optimize location-based food distribution:

- Individuals within a 1km radius of a hawker center will be notified about available food items.
- Recipients must agree to collect the item, with options for self-pickup or delivery (for those with mobility issues).
- Volunteers registered on our platform will be notified of delivery requests and tasked with delivering food to recipients with mobility issues.
- Recipients will confirm collection on the platform, updating the database accordingly.

## How It Works

1. **Partner organizations list surplus food** on our platform.
2. **Food items are matched** with recipients based on dietary needs and location using our algorithm.
3. **Notifications are sent** to recipients and volunteers about available food and delivery requests.
4. **Recipients collect food** or have it delivered by volunteers.
5. **Database updates** are made upon confirmation of food collection.

## Economic Defense and Total Defense

The implementation of Sourcefood will play a crucial role in supporting Singapore's economic defense, a key pillar of the country's Total Defense strategy. Economic defense refers to the resilience of Singapore's economy, ensuring it can withstand crises and disruptions. By reducing food waste and improving food distribution, our platform contributes to economic sustainability and resilience in several ways:

1. **Reducing Economic Burden:** By efficiently reallocating surplus food to those in need, Sourcefood helps reduce the economic strain on low-income families. This ensures that their limited financial resources can be directed towards other essential needs, thereby enhancing their economic stability.

2. **Supporting Local Businesses:** Our partnerships with local hawker centers, bakeries, and supermarkets create a sustainable system where excess food is put to good use instead of going to waste. This not only supports local businesses by reducing their waste disposal costs but also helps maintain a balanced demand and supply cycle within systems.

3. **Strengthening Community Bonds:** By encouraging businesses and volunteers to participate in food distribution, we can help foster a culture of mutual aid and cooperation. This community resilience is a fundamental aspect of Total Defense, ensuring that in times of crisis, such as economic downturns or natural disasters, the community can rely on its collective strength to overcome challenges.

4. **Promoting Food Security:** A reliable and efficient food distribution system enhances Singapore’s overall food security. By minimizing waste and ensuring that food reaches those who need it most, we contribute to the nation's ability to sustain its population during times of economic or supply chain disruptions.

Through these efforts, our solution Sourcefood not only addresses immediate needs related to food insecurity and waste but also strengthens the broader economic and social fabric of Singapore, ensuring long-term resilience and stability.
