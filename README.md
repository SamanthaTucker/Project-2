# Vacation Planner

**Problem:** 
- Users don't have a vacation planner app/ physical planner to organize their vacations.
- The users can use this app to plan out vacations/small trips to help organize their budget, location, hotels, dates, and travel notes.
- Overall this app can provide an organised list for users to input and edit to get excited for their vacations!

**User Stories:**
As a user, I should be able to...
- Organize my vacation and have it presented on my home page all on one list/area.
- Login / Create Aaccount
- Have my account personalized
- Add / Remove / Edit any items I input at any time.
- Delete my account If I want to
- See clearly where to input my items to create a planner for each vacation I want.
- Save my progress to my home page at any time.
- Have an option to add my vacation experience as more Travel Notes, almost like a blog.

**Who Would Use This?** 
- Vacation planners
- Organised people who like to have planners
- People who enjoy planning vacations
- Frequent Travelers
- Big family vacationers
- Bloggers

## Routes:

Route Name | URL | HTTP Verb | Description
---------- | --- | --------- | -----------
Index | /planner | GET | Main home page user will see after logging in/ creating an account
New | /planner/new | GET | New: will be adding locations, budget, travel notes, and day schedules.
Create | /planner | POST | User can create a new vacation with basic Location, Budget, Number of days, to show up on index route.
Show | /planner/:id | GET |
Edit | /planner/:id/edit | GET |
Update | /planner/:id | PUT |
Destroy | /planner/:id | DELETE |

## Wireframe 

**Main Page/ Login or Create Account:**

![Image of Main Page](https://i.imgur.com/EhMAAHB.png)

**Create Account Page:**

![Image of Create Account Page](https://i.imgur.com/6p3LZpi.png)

**Home Page After Login/ Create Account:**

![Image of Home Page After Login](https://i.imgur.com/ThAN6pr.png)
