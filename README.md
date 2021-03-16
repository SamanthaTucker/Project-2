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
Index | /planner | GET |
New | /planner/new | GET |
Create | /planner | POST
Show | /planner/:id | GET |
Edit | /planner/:id/edit | GET |
Update | /planner/:id | PUT |
Destroy | /planner/:id | DELETE |

## Wireframe 

**Main Page/ Login or Create Account:**

![Image of Main Page](https://lh3.googleusercontent.com/iVEhSCaLCTiWXNpWjjzg_ZXXi-uucy5-WXlZ1W9EmtagWPIJ_SswLYMJMqUTLyaoudzJ3iPGcce2PfKO2cfKzAWBSdawM51KAnLisoTtdVIusg1Q-VWCFsQHOHczbQa1Vk8Xpfq--UslUSrOEJd28T_LqhRzuxyZaoZUAJySwi2IpyOB4o2u2yoUIDmlWS39UQhnAH5NKWGKazk6n9N8RicKpZx9o3mXctpLmj76v0kY-cFFausohat7O893YzVi_H2rBgJ1P95i1uXQchCNlDcycCiaHLj8Vb2L6QQmX0pOZUs4FtKp2YmTTWlMx3w8EH5WQ8H5vj-1VV0t9hHXsifqn498WdMspqaGaOCBnHpgyJGGmgr436WS6FV6f9ph5vZqBmUPhbsU1GinxVhuD9jglG2Ox4cbuH5g-XEl8lY48Zn_4X2TPrt5iwGwLhgrBKlLotkJLFIWqGHQpoU1cVIpVAM8hVLfQXFd_X0t1pEMkr4XDeWJg7avR1bUOv6xvL2cKJU_4qhwvQTQ79U4eYKXUlPV0koa7eeS_p9pzGCKAXYedikFvRba2nLfYNE_Dz2bEQP51O9g1i2csEeA9pnTlSXGkruZiLoDXeLGutLRfSZbK_d1k4FqW1obsHtrWFSFQOo6-5o5qG7pADMvEBHsKUjOUBZ2cPbIVMyeLNz4m4X_dIvYTl-I2LwrPelTZeqBHq1vCisDHEpGtGdpkg=w558-h645-no?authuser=1)

**Create Account Page:**

![Image of Create Account Page](https://lh3.googleusercontent.com/Lp6JqLbzaJ-7EO1cCupJnfDfExQvsRpL18vlxE2fofS_pBgkg1XwxW83vpLLYFCRK0sZbodiYCpCSVPdaCWP6-upXs1br_Q3ebyKS9ClO42CyHDNIb-KgwlcuTkQBUEMvE_qckJvESTNuUgclAk3HaxeWhqt13gAnOOjgRh3T97XussmsqSWI47Fu_rbjrBKWV3OlGGezFsfyhbMTl3xJRa3Jvu0Wb_I-bTsNHuQ9dCmXn5azrRnrVCKFCTxStyPcAcLEPP8Ol5FNfLcWJoJ7gSV8E1kfz9Q20UF7eA2w3aoDywgWd9IfvXJOelRbpFZgnMc1MlNjk_Lqhi3SZ3ArUSbrFqmyhDZHk2y2MqXsML8Fe0mmG_F92XjVd7FTCUpliUHVNliCQSrVb53MgCNI8f_G3Z6a_AdWsdvNpySdTWZdKSJXNkEAl-EO0paWb8fxyDTCe8fSyJP9mHu_R4omNOOrLUUyhSTOQ-0UxDYb0RlRUJZccE9k5YB9iDSYotf1v9CkVbPswjm5HV-nNp7Ma565ph4KgMLCp98tuLTxfIFaPZMkbKpYojxntNmzoQR3kPiwSNhrqCkqO0V23aAz9RPBTlwLFj9PqrMTH8ZsY02xxzZ1Y77G6bH494NECABzswSYJszcH380LD4lHCstEyLfmy5YsUKWk_ZMzr0pILPzo-UZIaurBFf7kj1R-t3nOqnkaZg6yXKTLopWwn9zQ=w583-h646-no?authuser=1)

**Home Page After Login/ Create Account:**

![Image of Home Page After Login](https://lh3.googleusercontent.com/DFd3pyq6-dQAHG2x_0XX8VFoRkZr9-MbEm6E70a-PRxU7-SgmHypMDp4jJMRcQTxfX6n-F1AbyZX7xFXKxhjcDqkJV00-Zyl2aJaDVlp1F0owyAYglZXuxawC15JOb7dBN-wmMxDXBk4r0gabr7VF4dkoAdlQLanE3Q2onV3pa9Y4yNxjPfzXOjOlvYwHEo9-XnSGiJ6lMZFsc83jO_CQT7phaG7eooyNLzpTEeH6CTur0HbTZprHJHwRfQV0FZneiz7nTBtiJfP7B73N_TGUvcmwo7tQqtKlsCvnEwH-YeZxHB-7CDUpImhCYZh_9TveeODhQCoynzpSRSHlzFHz8sPFhWAxSf-HiTzD9FcHi5t51Cusspk6nl8UDRhW1K6uESpnhXd8ePwoXD-U1MZcvoAvJt_W0VKT4MktM2WHzecTiElUySM2fmxD6Q5P07y3M-tkY4Ojob8VLqrAe6zMjzRJfPyPWER8ur_PUvJCKEekE-CaeMG8QJQiMQCOg0Ve-N0IysjLdMIxme5_sJ2cVwmg9mFL-N9K7rutqWPgellwx5gD1UdIvERWzklHbQgLhUtJ5m5mk8naziRpzJk0xGmpQfM93itQM50NNMeo6rI2BNkkaBMnlrFxBQPFkOyn-kdhBQrAmZLc52tYVCgUvqhyY5hJCRVz1um1_PmlvDmkj7vgisqyqfD_i4p0hwEOepbFLdUje9zHJ-yXxj5FQ=w673-h811-no?authuser=1)
