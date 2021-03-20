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

![Image of Main Page](https://lh3.googleusercontent.com/iVEhSCaLCTiWXNpWjjzg_ZXXi-uucy5-WXlZ1W9EmtagWPIJ_SswLYMJMqUTLyaoudzJ3iPGcce2PfKO2cfKzAWBSdawM51KAnLisoTtdVIusg1Q-VWCFsQHOHczbQa1Vk8Xpfq--UslUSrOEJd28T_LqhRzuxyZaoZUAJySwi2IpyOB4o2u2yoUIDmlWS39UQhnAH5NKWGKazk6n9N8RicKpZx9o3mXctpLmj76v0kY-cFFausohat7O893YzVi_H2rBgJ1P95i1uXQchCNlDcycCiaHLj8Vb2L6QQmX0pOZUs4FtKp2YmTTWlMx3w8EH5WQ8H5vj-1VV0t9hHXsifqn498WdMspqaGaOCBnHpgyJGGmgr436WS6FV6f9ph5vZqBmUPhbsU1GinxVhuD9jglG2Ox4cbuH5g-XEl8lY48Zn_4X2TPrt5iwGwLhgrBKlLotkJLFIWqGHQpoU1cVIpVAM8hVLfQXFd_X0t1pEMkr4XDeWJg7avR1bUOv6xvL2cKJU_4qhwvQTQ79U4eYKXUlPV0koa7eeS_p9pzGCKAXYedikFvRba2nLfYNE_Dz2bEQP51O9g1i2csEeA9pnTlSXGkruZiLoDXeLGutLRfSZbK_d1k4FqW1obsHtrWFSFQOo6-5o5qG7pADMvEBHsKUjOUBZ2cPbIVMyeLNz4m4X_dIvYTl-I2LwrPelTZeqBHq1vCisDHEpGtGdpkg=w558-h645-no?authuser=1)

**Create Account Page:**

![Image of Create Account Page](https://lh3.googleusercontent.com/IumhEYPh-u2MaR1JWvrK3YyxwgJkCzz2vk4t1aDWrQGNcD5IT6nSVOGikukQxjxybT26xub-O40ormEzhOl6e1SLZ8n3WIp5KVkSGi9KEFn3GI428kUmraEoDT_xjYMRdFdrGghoKevxLhLgVb7Z0Kv4GF8HU4y42SAunAl-z9XA1Qrpd0cJSr2s0a1aQRy1lASL3YVWKdbzO3mEsKzSl_lF5EyWTtLaK-0AodKzGhFZfTXH71catlMZWdWtiQV74Q0VDNZYJYSkiVXRC9POAof9dFRio95kSXk9_odSQcvYA1yj7h5J5gx0Ej_SAdpXUTYPhZWHUx5hqRk69h0rl7cMecIMtU_rb4zV_mTdRFnBUWRVietYAf9Otmo3uqdTOPEEp6rqx-qCbK_IdL6hdvz4GQE7RPIklu4uFG79FnhhDBn7AqmywcLCA61onvXDZxG3BQl2db50800y_cOpghFklyvZFHZTBOue_OpezPPw_HhDFPpnGPwlpECTc7psPzegydnZbm20JBokb4CBhNwPUNZqTwsaVX5YPe8v4IZhVCY0ERNmJwp1zzV-6Vt5JDwHSfC4DLO6lqxntxIeCjWSUOh7oIDs8biwTiX9sRlgFc8-TReRe2meXxYlNJ1JdWGwx5dh13R-rAQOWZeEfL-YVTdy4471kuX9cH9PACWVdyI-MmiZxPGTjBlSp7VWd1Au00ZM8wqD6b-3GRhdww=w583-h646-no?authuser=1)

**Home Page After Login/ Create Account:**

![Image of Home Page After Login](https://lh3.googleusercontent.com/rZPqwp4ipunoH6xPNY79tpsaE64gXuGWDUvhNtuyYgxaH5B-xFNnnjATicQ5Yxz_5MSKTDgSMlvBTW2OdUG1JHSSMW4bNXQXvCehC5DKcn9BPEG96SY8sHIS1gFHt8OY6zlRnRyvPrqKluTytazn0gAy459pEj1PGfdsG-nch_LY-oUYSYToAwgYTvqbRXSqudppi4FLJslRlF8A47Zf0KAHeT663AZPm7Ef2Lf2g8Fl9RL4K3sa2ayL3kg-ONeS9Wnkz4XwqU7lb4LNgefgOimcPZF1uhI98Q5cEMoPKPk0O9AXf40XWmNdp8MT4FVFboxjiedoqFTW3peNTSnWiRjE1NnQFyAZiIFaK73MCT5w4sXL0Ykd9gjOn1YqAwDOU95njjm2Uxk-0nvKE3VhIG7eXxbw6eGuGz9Y89bwJDy6SbDBdL_RaMVZE1ISDGKlrEtL1AhuXxi8ULh5ergObSEy2GAXOMS4WRTsXJ1yiwLmjkuPCGO4yjcKgnCn6y0IajcJx-RKZAtHHk33y8GdZFrFK0YSfjsTdjAVXEugpP6Wtq9b_Xs8TO20UOT7rwmtfie92S9cnK2QU-BvMYE-_DrxWHSoij-a4t6opejc0K6674NZc-d2qE51iFGNWY9oEe-_HJ9mgdcezDG6RM0wolHmNHHqBSebUTYgdo5wk3f3mqIsOelJeU00g5HnGu9hBKiKi8EoEbICopVCTQ15gA=w673-h811-no?authuser=1)
