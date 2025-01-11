CREATE TABLE question_list (
  id SERIAL PRIMARY KEY,
  content VARCHAR(255) DEFAULT NULL,
  option_a VARCHAR(255) DEFAULT NULL,
  option_b VARCHAR(255) DEFAULT NULL,
  option_c VARCHAR(255) DEFAULT NULL,
  option_d VARCHAR(255) DEFAULT NULL,
  answer CHAR(1)
);

CREATE TABLE accountuser (
    id SERIAL PRIMARY KEY,                    -- Tự động tăng và là khóa chính
    username VARCHAR(255) NOT NULL UNIQUE,    -- Tên tài khoản, bắt buộc và duy nhất
    password VARCHAR(255) NOT NULL,           -- Mật khẩu, bắt buộc
    mail VARCHAR(255) UNIQUE,                 -- Email (có thể rỗng) và duy nhất
    hoten VARCHAR(50),                        -- Họ tên
    cccd VARCHAR(12) UNIQUE CHECK (cccd ~ '^[0-9]{12}$'), -- Số CCCD, duy nhất và chỉ chứa 12 ký tự số
    gioitinh CHAR(1) CHECK (gioitinh IN ('M', 'F')), -- Giới tính: 'M' (Nam), 'F' (Nữ)
    ngaysinh DATE,                            -- Ngày sinh
    login_count INTEGER DEFAULT 0,            -- Số lần đăng nhập, mặc định là 0
    last_login_date TIMESTAMP
);

CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES accountuser(id)
);

create table usersOTP (
	 id SERIAL PRIMARY KEY,
	 user_id INTEGER NOT NULL,
	 FOREIGN KEY (user_id) REFERENCES accountuser(id)
)

INSERT INTO question_list (id, answer) 
VALUES 
(1, 'B'),
(2, 'B'),
(3, 'D'),
(4, 'D'),
(5, 'B'),
(6, 'D');

INSERT INTO question_list (id, answer) VALUES
(7, 'D'),
(8, 'D'),
(9, 'D'),
(10, 'D'),
(11, 'D'),
(12, 'D'),
(13, 'D'),
(14, 'D'),
(15, 'D'),
(16, 'D'),
(17, 'D'),
(18, 'D'),
(19, 'D'),
(20, 'D'),
(21, 'D'),
(22, 'D'),
(23, 'D'),
(24, 'D'),
(25, 'D'),
(26, 'D'),
(27, 'D'),
(28, 'D'),
(29, 'D'),
(30, 'D'),
(31, 'D');




INSERT INTO question_list (id, content, option_a, option_b, option_c, option_d, answer) VALUES
(32, 'Where most likely are the speakers?', 'A. At a concert hall', 'B. At a movie theater', 'C. At an amusement park', 'D. At an Internet cafe', 'B'),
(33, 'What problem does the woman report?', 'A. A screen is malfunctioning', 'B. Other patrons are being loud', 'C. Some lights have been left on', 'D. A seating area is not clean', 'C'),
(34, 'What does the man say he will do?', 'A. Tell a coworker', 'B. Adjust some equipment', 'C. Follow the woman', 'D. Issue a refund', 'A'),
(35, 'What did the man receive recently?', 'A. A credit card', 'B. A bank statement', 'C. An e-mail notice', 'D. A program brochure', 'A'),
(36, 'According to the woman, why is a change being made?', 'A. To reduce waste', 'B. To speed up a process', 'C. To comply with a new law', 'D. To improve security', 'D'),
(37, 'What does the woman offer to do?', 'A. Investigate some account activity', 'B. Provide a Web address', 'C. Transfer the man''s call', 'D. Set up an in-person visit', 'C'),
(38, 'Why is the woman talking to the man?', 'A. To report a problem', 'B. To confirm a schedule', 'C. To get feedback on an idea', 'D. To fulfill a request for information', 'C'),
(39, 'What does the man imply when he says, “you were part of the logo redesign project”?', 'A. The woman should correct a misunderstanding.', 'B. The woman probably understands a difficulty.', 'C. The woman has been busy lately.', 'D. The woman is qualified for a task.', 'B'),
(40, 'What does the woman decide to do?', 'A. Arrange a meeting', 'B. Look at some records', 'C. Draft a document', 'D. Wait for an announcement', 'A'),
(41, 'What does the man say will happen soon?', 'A. A manager will resign.', 'B. Some inventory will be checked.', 'C. A community event will take place.', 'D. A competing café will open nearby.', 'C'),
(42, 'What does the man ask the woman to do?', 'A. Learn a new process', 'B. Work additional hours', 'C. Follow a rule more carefully', 'D. Make some suggestions', 'B'),
(43, 'What does Jean say she intended to ask for?', 'A. A day off', 'B. Some training', 'C. Details about a plan', 'D. Some reimbursement', 'B'),
(44, 'Why did the man miss a call?', 'A. He was setting up a booth.', 'B. He was attending a workshop.', 'C. He was walking around a trade fair.', 'D. He was completing a registration process.', 'A'),
(45, 'What problem does the woman mention?', 'A. A train has been delayed.', 'B. She cannot find a file.', 'C. An area has heavy traffic.', 'D. She misunderstood a schedule.', 'B'),
(46, 'What will the man do tomorrow?', 'A. Send out a group e-mail', 'B. Collect samples from exhibitors', 'C. Give the woman a ride to a venue', 'D. Make a presentation to potential clients', 'D'),
(47, 'What are the speakers working on?', 'A. Buying supplies for a farm', 'B. Inspecting a storage facility', 'C. Creating a community garden', 'D. Conducting scientific experiments', 'C'),
(48, 'What does the woman ask the man to do?', 'A. Plant some seeds', 'B. Accept a delivery', 'C. Take some measurements', 'D. Move some boxes', 'B'),
(49, 'What will the woman give the man?', 'A. A travel itinerary', 'B. A set of instructions', 'C. A property map', 'D. A keycard', 'B'),
(50, 'Who most likely is the woman?', 'A. A library patron', 'B. A potential donor', 'C. An invited speaker', 'D. A job candidate', 'C'),
(51, 'What does the woman mention about Mr. Burke?', 'A. She will wait for him to return.', 'B. She exchanged e-mails with him.', 'C. She has not seen him for a long time.', 'D. She has read some of his short stories.', 'B'),
(52, 'What will Darren most likely do for the woman?', 'A. Store some of her outerwear', 'B. Write down her message', 'C. Serve her a beverage', 'D. Accompany her to an office', 'C'),
(53, 'What is the woman’s reason for being in the office?', 'A. To attend a meeting', 'B. To interview for a job', 'C. To apply for a loan', 'D. To discuss a proposal', 'A'),
(54, 'What kind of information does the man want?', 'A. Directions to a building', 'B. A copy of the meeting notes', 'C. The name of a person', 'D. Details about a product', 'B'),
(55, 'What is the man concerned about?', 'A. A new policy', 'B. A potential delay', 'C. A delivery schedule', 'D. A customer complaint', 'C'),
(56, 'What will the woman do next?', 'A. Call the office', 'B. Meet with a client', 'C. Talk to a manager', 'D. Make a reservation', 'B'),
(57, 'What does the man suggest?', 'A. Postpone the meeting', 'B. Wait for a reply', 'C. Consider a new plan', 'D. Change the schedule', 'C'),
(58, 'What time will the event start?', 'A. 10:00 AM', 'B. 12:00 PM', 'C. 2:00 PM', 'D. 4:00 PM', 'A'),
(59, 'What does the man suggest the woman do?', 'A. Send an email', 'B. Speak with a colleague', 'C. Prepare a report', 'D. Take a phone call', 'B'),
(60, 'What is the man looking for?', 'A. A book', 'B. A report', 'C. A document', 'D. A folder', 'D'),
(61, 'Why does the man stop?', 'A. To take a phone call', 'B. To make a decision', 'C. To check his schedule', 'D. To help the woman', 'A'),
(62, 'What does the woman explain?', 'A. She is changing her plans', 'B. She is working on a new project', 'C. She will be unavailable tomorrow', 'D. She is meeting someone outside', 'C'),
(63, 'What does the man offer?', 'A. Help with a task', 'B. A ride to a location', 'C. Some advice', 'D. A new schedule', 'B'),
(64, 'What will happen next?', 'A. The woman will review some files', 'B. The man will visit a client', 'C. The meeting will begin', 'D. A product will be delivered', 'C'),
(65, 'Why is the woman making a call?', 'A. To confirm a meeting', 'B. To ask for help', 'C. To report an issue', 'D. To arrange a time for a meeting', 'A'),
(66, 'What does the woman suggest?', 'A. Make a phone call', 'B. Wait for confirmation', 'C. Cancel the meeting', 'D. Review the schedule', 'B'),
(67, 'What does the man offer to do?', 'A. Call someone for advice', 'B. Postpone the meeting', 'C. Schedule a follow-up', 'D. Send an email', 'C'),
(68, 'What did the woman decide to do?', 'A. Change the meeting time', 'B. Ask for a discount', 'C. Cancel a reservation', 'D. Request an update', 'A'),
(69, 'What does the man say will happen later?', 'A. A meeting will be rescheduled', 'B. An announcement will be made', 'C. A document will be delivered', 'D. A decision will be made', 'B'),
(70, 'What does the man offer to do next?', 'A. Take a message', 'B. Send an email', 'C. Provide more details', 'D. Arrange a meeting', 'A');



INSERT INTO question_list (id, content, option_a, option_b, option_c, option_d, answer) VALUES
(71, 'Where most likely is the announcement being made?', 'A. In a factory', 'B. In a train station', 'C. In a fitness center', 'D. In a supermarket', 'A'),
(72, 'What does the speaker tell the listeners?', 'A. Where to wait', 'B. Whom to give an item to', 'C. When an activity can be resumed', 'D. How to ask for assistance', 'A'),
(73, 'According to the speaker, what should the listeners avoid doing?', 'A. Leaving belongings behind', 'B. Making too much noise', 'C. Ending a working period', 'D. Passing through an outdoor area', 'C'),
(74, 'What kind of event is taking place?', 'A. A company outing', 'B. A community festival', 'C. A charity fund-raiser', 'D. A grand opening', 'A'),
(75, 'What does the speaker invite listeners to do?', 'A. Make some purchases', 'B. Have a meal', 'C. Take some pictures', 'D. Plant some trees', 'B'),
(76, 'Why does the speaker say, "it''s quite hot today"?', 'A. To express her discomfort', 'B. To explain her concern for others', 'C. To justify a change to a plan', 'D. To praise some event workers', 'B'),
(77, 'According to the news report, what have the Regents decided to do?', 'A. Change their mascot', 'B. Move to another city', 'C. Let a player go', 'D. Cancel a game', 'C'),
(78, 'What does the speaker say about Pierce?', 'A. He has been injured', 'B. He is the coach of the Regents', 'C. He did not attend a press conference', 'D. He plays the same position as Mr. Tabor', 'D'),
(79, 'What disadvantage does the speaker mention?', 'A. A large expense', 'B. Fan''s disapproval', 'C. A dispute with another team', 'D. Disqualification from a competition', 'B'),
(80, 'What is the speaker calling about?', 'A. A job opening', 'B. An upcoming event', 'C. A shared workspace', 'D. A company policy', 'A'),
(81, 'What does the speaker ask the listener to do?', 'A. Choose among some options', 'B. Attend a team meeting', 'C. Delay a project deadline', 'D. Clarify his previous instructions', 'A'),
(82, 'What does the speaker most likely mean when she says, "Steve hasn''t taken a day off in months"?', 'A. She is impressed by Steve''s dedication.', 'B. She is emphasizing Steve''s workload.', 'C. She is worried about a shortage of materials.', 'D. She found a mistake in some records.', 'B'),
(83, 'What does the speaker say about the meeting?', 'A. It must finish on time.', 'B. It is being conducted virtually.', 'C. It was postponed once before.', 'D. It is for members of one department.', 'B'),
(84, 'What is the topic of the meeting?', 'A. Some guest complaints', 'B. Some room designs', 'C. A new hotel location', 'D. A booking system', 'D'),
(85, 'What will the listeners most likely do next?', 'A. Research some topics', 'B. Look at some photographs', 'C. Listen to a description', 'D. Watch a demonstration', 'C'),
(86, 'What is the purpose of the speech?', 'A. To introduce a product', 'B. To accept an award', 'C. To announce a job promotion', 'D. To celebrate a sales milestone', 'B'),
(87, 'What was a team''s goal in designing a container?', 'A. To make it attractive', 'B. To ensure its durability', 'C. To keep its production cost low', 'D. To enable people to customize it', 'A'),
(88, 'What does the speaker mention as a source of inspiration?', 'A. A nonfiction book', 'B. An organic plant', 'C. Some overseas travel', 'D. Some pieces of artwork', 'D'),
(89, 'What has just taken place?', 'A. A giveaway contest', 'B. A live reading', 'C. A book review', 'D. An author interview', 'D'),
(90, 'What does the speaker mean when he says "we have a social media account"?', 'A. Listeners can raise funds to support the show.', 'B. Listeners should never call the radio station.', 'C. Listeners can discuss the current episode online.', 'D. Listeners can receive updates about the show between episodes.', 'C'),
(91, 'According to the speaker, what is special about next week''s episode?', 'A. It may be cancelled.', 'B. It will air at a different time.', 'C. It will have a guest host.', 'D. It will be recorded outside of the studio.', 'C'),
(92, 'What are the listeners training to do?', 'A. Write promotional materials', 'B. Teach history classes', 'C. Give museum tours', 'D. Manage unpaid volunteers', 'C'),
(93, 'According to the speaker, what should the listeners pay attention to?', 'A. The layout of a space', 'B. Some visitors'' requests', 'C. Some safety guidelines', 'D. Her communication style', 'D'),
(94, 'What does the speaker ask the listeners to do?', 'A. Return a badge after the session', 'B. Take notes during a talk', 'C. Raise their hands to ask questions', 'D. Sign an attendance sheet', 'B'),
(95, 'What kind of company do the listeners work for?', 'A. A cleaning service', 'B. A shipping business', 'C. A construction firm', 'D. A vehicle repair shop', 'B'),
(96, 'What did the company do last year?', 'A. It changed its pricing system.', 'B. It hired an external consultant.', 'C. It began using a new software program.', 'D. It provided additional training to staff.', 'C'),
(97, 'Look at the graphic. What category does the speaker want to talk about next?', 'A. Communication', 'B. Price', 'C. Speed', 'D. Reliability', 'D'),
(98, 'What has the speaker been researching?', 'A. New regulations for an industry', 'B. The needs of a certain target market', 'C. The efficiency of a business process', 'D. Environmentally-friendly practices', 'D'),
(99, 'Look at the graphic. When does the speaker propose meeting?', 'A. At 1 P.M.', 'B. At 2 P.M.', 'C. At 3 P.M.', 'D. At 5 P.M.', 'B'),
(100, 'What does the speaker offer to do?', 'A. Provide a document in advance', 'B. Update an entry in a calendar', 'C. Talk to a department supervisor', 'D. Take over one of the listener''s tasks', 'A');



INSERT INTO question_list (id, content, option_a, option_b, option_c, option_d, answer) VALUES
(101, '------- the difference between the two brands is small, most consumers purchase the cheaper one.', 'A. Until', 'B. Because', 'C. Before', 'D. So', 'B'),
(102, 'Audience members were impressed that the question asked of the candidate was answered -------.', 'A. clearly', 'B. clear', 'C. cleared', 'D. clearing', 'A'),
(103, 'In an attempt ------- sustainable energy, city officials have had solar panels affixed to some public buildings.', 'A. generates', 'B. generated', 'C. generating', 'D. to generate', 'D'),
(104, 'The slow ------- of the fire department resulted in severe damage to the building.', 'A. duration', 'B. response', 'C. treatment', 'D. maintenance', 'B'),
(105, 'After hours of searching, the source of the water leak was ------- identified by the plumber.', 'A. routinely', 'B. finally', 'C. rarely', 'D. strongly', 'B'),
(106, 'Please tell ------- that the workshop has been moved to Conference Room 402.', 'A. whatever', 'B. themselves', 'C. everyone', 'D. something', 'C'),
(107, 'Highway 16 was widened over the summer to ------- the heavier traffic that is using the roadway.', 'A. duplicate', 'B. extend', 'C. accommodate', 'D. propose', 'C'),
(108, 'Meal vouchers were given to Beta Airways passengers ------- were not able to depart on time because of a booking error.', 'A. when', 'B. because', 'C. recently', 'D. who', 'D'),
(109, 'The catalog for the gallery contains an accurate ------- of each piece of artwork that is offered for sale.', 'A. described', 'B. description', 'C. descriptive', 'D. describes', 'B'),
(110, 'To ensure that old appliances are disposed of properly, the city will offer free removal of these devices ------- April 2 and April 5.', 'A. into', 'B. from', 'C. until', 'D. between', 'D'),
(111, 'A buffet dinner is available to the guests, so they may eat ------- looks appetizing to them without having to place an order.', 'A. anyway', 'B. whatever', 'C. wherever', 'D. anything', 'B'),
(112, 'During the music festival, goods will be sold only by ------- vendors who have registered with the planners.', 'A. controversial', 'B. increased', 'C. confident', 'D. approved', 'D'),
(113, 'The grocery store chain Refresh Foods has ------- in organic products since it opened in 2001.', 'A. participated', 'B. certified', 'C. specialized', 'D. admired', 'C'),
(114, 'The malfunction of the printer was ------- a component that had been inserted incorrectly during the assembly process.', 'A. due to', 'B. whereas', 'C. as though', 'D. instead of', 'A'),
(115, 'The proposed holiday schedule is ------- to most workers because they feel it is fair.', 'A. acceptably', 'B. accept', 'C. acceptable', 'D. accepting', 'C'),
(116, 'The test will ------- prove whether or not the patient has the disease.', 'A. like', 'B. liking', 'C. likable', 'D. likely', 'D'),
(117, 'With over two hundred unique stores, the Plainview Mall ------- millions of shoppers on an annual basis.', 'A. attracts', 'B. implements', 'C. postpones', 'D. contributes', 'A'),
(118, 'The participants will be judged on ------- performance, and the winners will be announced later in the awards ceremony.', 'A. athletically', 'B. athletic', 'C. athletes', 'D. athlete', 'B'),
(119, 'The York Foundation is an organization that has been supporting ------- in medical technology for the past decade.', 'A. to advance', 'B. advanced', 'C. advances', 'D. advancing', 'C'),
(120, '------- the volleyball tournament is held indoors or outdoors depends heavily on the weather forecast for that day.', 'A. Because', 'B. Although', 'C. Whether', 'D. Whereas', 'C'),
(121, 'The company was under investigation after several former employees made allegations of unfair -------.', 'A. compositions', 'B. assurances', 'C. momentums', 'D. practices', 'D'),
(122, '------- joined Vince''s Gym, Mr. Pinter could attend group classes and health counseling sessions for free.', 'A. Being', 'B. Having', 'C. To have', 'D. To be', 'B'),
(123, 'The best method for improving the ------- of your home at little cost is giving the exterior a fresh coat of paint.', 'A. privacy', 'B. appearance', 'C. control', 'D. location', 'B'),
(124, 'Marketers believed that if the packaging were more ------- colored, consumers might pay more attention to the product.', 'A. variously', 'B. vary', 'C. various', 'D. variety', 'C'),
(125, 'The police officer directed the traffic ------- the detour ramp so that drivers could find the route easily.', 'A. toward', 'B. like', 'C. of', 'D. during', 'A'),
(126, 'Employees are asked to pair up with another ------- and check each other at the predetermined meeting place during fire drills.', 'A. reliance', 'B. supervision', 'C. colleague', 'D. calculator', 'C'),
(127, 'The car owner submitted ------- evidence of the damage along with a mechanic''s report to his insurance company.', 'A. photographer', 'B. photographically', 'C. photographic', 'D. photogenic', 'C'),
(128, 'The restrooms on the second floor are ------- unavailable because one of the sinks is being replaced.', 'A. temporarily', 'B. previously', 'C. respectively', 'D. vitally', 'A'),
(129, 'Because our sales representatives meet with high-level clients in the industry, ------- those with a professional manner will be considered for the position.', 'A. only', 'B. moreover', 'C. except', 'D. however', 'A'),
(130, 'On next week''s radio program, our host will interview Kristen Dabney about her time working as an ------- for a UN official.', 'A. interpretation', 'B. interpret', 'C. interpreting', 'D. interpreter', 'D');


INSERT INTO question_list (id, content, option_a, option_b, option_c, option_d, answer) VALUES
(131, '', 'A. is requesting', 'B. has requested', 'C. have to request', 'D. had to request', 'C'),
(132, '', 'A. Unfortunately', 'B. Therefore', 'C. Regardless', 'D. Finally', 'B'),
(133, '', 'A. upon', 'B. during', 'C. before', 'D. at', 'B'),
(134, '', 'A. The move from keys to keyless entry should make the facility more secure.', 'B. We will be looking forward to seeing you sometime next week.', 'C. The security office is open 24 hours a day.', 'D. This is for product security.', 'C'),
(135, '', 'A. active', 'B. actived', 'C. actively', 'D. activated', 'C'),
(136, '', 'A. Our company tries to work with outside communities.', 'B. Our commitment to the community is as important as our commitment to our students.', 'C. Our company is unique and uses strange instruments.', 'D. Our company is in a special location, next to the auto service center.', 'B'),
(137, '', 'A. contemporary', 'B. unknown', 'C. strange', 'D. boring', 'A'),
(138, '', 'A. apply', 'B. applied', 'C. applying', 'D. to apply', 'C'),
(139, '', 'A. offers', 'B. sustains', 'C. mitigates', 'D. maintains', 'A'),
(140, '', 'A. to approve', 'B. approves', 'C. approving', 'D. approved', 'D'),
(141, '', 'A. So you can feel comfortable taking it night after night.', 'B. Talk to your doctor today to see if it''s right for you.', 'C. This is the only stimulant approved for prolonged use that is approved by the FDA.', 'D. Enter this code for a free sample and discounts.', 'A'),
(142, '', 'A. during', 'B. around', 'C. before', 'D. after', 'C'),
(143, '', 'A. make', 'B. plan', 'C. conceive', 'D. deliver', 'B'),
(144, '', 'A. comments', 'B. suggestions', 'C. spots', 'D. suggested', 'B'),
(145, '', 'A. is a safe space for all customs and cultures', 'B. stays open late on Tuesday', 'C. needs a new janitor', 'D. will move next week', 'A'),
(146, '', 'A. I look forward to your ideas and enthusiasm.', 'B. I''m look forward to your ideas and enthusiasm.', 'C. I look forward to you''re undivided attention.', 'D. I hope you reply before its too late.', 'A');



INSERT INTO question_list (id, content, option_a, option_b, option_c, option_d, answer) VALUES
(147, 'What is indicated about TriStar Sports Gear?', 'A. It is a family business.', 'B. It is located next to a school.', 'C. It holds a sale every year.', 'D. It mainly sells weight training equipment.', 'A'),
(148, 'How can customers receive a discount on athletic shoes?', 'A. By buying more than two pairs', 'B. By visiting on July 1', 'C. By placing an order online', 'D. By presenting a flyer', 'D'),
(149, 'What kind of movie did Phyllis think the group was going to see?', 'A. Horror', 'B. Sci Fi', 'C. Comedy', 'D. Romance', 'A'),
(150, 'What does Jason mean when he texts, ''I''m in!''', 'A. He wants to see the horror movie they agreed on.', 'B. He wants to be in a comedy movie.', 'C. He wants to be included in the group.', 'D. He wants to stay in his house tonight.', 'C'),
(151, 'What is mentioned about the event?', 'A. It is sponsored by the Egyptian government.', 'B. It will feature an artifact exhibition.', 'C. It will be held in Egypt.', 'D. It is already sold out.', 'B'),
(152, 'What can be found on the library''s Web site?', 'A. An events calendar', 'B. A detailed map of the area', 'C. Facts about ancient Egypt', 'D. A guide to Egyptian food', 'A'),
(153, 'What most likely is Spring Valley Center?', 'A. A department store', 'B. A conference center', 'C. A logistics company', 'D. A business park', 'B'),
(154, 'Why is the event being held?', 'A. To attract new employees to a company', 'B. To schedule a sales conference', 'C. To advertise commercial rental space', 'D. To announce the opening of a shopping center', 'C'),
(155, 'What is the article about?', 'A. The tension at the border', 'B. The competition between neighboring residents', 'C. Cross border shopping expeditions', 'D. The opening of a new Cashco branch in the near future', 'C'),
(156, 'What is implied about Canadian residents?', 'A. They want a Cashco branch.', 'B. They dislike Americans coming to shop.', 'C. They don''t like going to America.', 'D. They have to travel far to get to a Cashco.', 'D'),
(157, 'In which of the positions marked [1], [2], [3] and [4] does the following sentence best belong? "A spokesperson for wholesale giant, Cashco, confirmed on Monday that a branch will finally open in Lockland next month."', 'A. [1]', 'B. [2]', 'C. [3]', 'D. [4]', 'C'),
(158, 'Why most likely would someone register for the event?', 'A. To learn about staying fit', 'B. To win a cash prize', 'C. To apply for a job', 'D. To contribute to the community', 'A'),
(159, 'According to the article, who is not allowed to participate in the event?', 'A. Senior citizens', 'B. Students with no student ID cards', 'C. Unaccompanied children', 'D. Foreign tourists', 'C'),
(160, 'What is the main goal of the Centerville County Shelter?', 'A. To build affordable housing', 'B. To provide basic necessities', 'C. To train professional athletes', 'D. To educate community members', 'B'),
(161, 'What is indicated about Winner''s Ale?', 'A. It is an old variety of beer.', 'B. People don''t know about it yet.', 'C. It is delicious.', 'D. It is cheap.', 'C'),
(162, 'What will the group most likely do next?', 'A. Report to corporate about Jeff', 'B. Go to the victory parade', 'C. See a movie', 'D. Go dancing and drink Winner''s Ale', 'C'),
(163, 'What does Molly mean when she says, ''off the record''', 'A. An unreleased song', 'B. A record is being kept of their events.', 'C. They won''t go and work officially.', 'D. There is a clear recording of all events and they want it off.', 'C'),
(164, 'What is suggested about Jeff?', 'A. He takes good notes.', 'B. He likes to drink.', 'C. He likes to talk.', 'D. He loves parades.', 'C'),
(165, 'What is indicated about Lichtenberg Air?', 'A. It is asking passengers to keep a baggage limit.', 'B. It is responding to customer complaints.', 'C. It has not increased its baggage fees for a decade.', 'D. It has added new destinations.', 'B'),
(166, 'What is suggested about passengers?', 'A. They are allowed to bring electronics.', 'B. They can take one bag onto the plane without any charge.', 'C. They must pay the increased airline ticket price from October 1.', 'D. They can get a 20 percent discount next month.', 'B'),
(167, 'According to the notice, what will happen when the price of fuel drops?', 'A. The stock price for Lichtenberg Air will increase.', 'B. Passengers will be offered gift certificates.', 'C. More flight attendants will be employed.', 'D. The extra charge will be waived.', 'D'),
(168, 'What can be inferred about Ms. Lynch?', 'A. She lives in Salem, Oregon.', 'B. She can speak a second language.', 'C. She is a motivational speaker.', 'D. She is a conference organizer.', 'D'),
(169, 'What is the purpose of the conference?', 'A. To attract foreign investment', 'B. To share teaching methods', 'C. To set curriculum standards', 'D. To establish a charitable foundation', 'B'),
(170, 'When must speakers return borrowed supplies?', 'A. April 4', 'B. April 10', 'C. July 12', 'D. July 16', 'B'),
(171, 'What is Ms. Lynch asked to inform Mr. Klein about?', 'A. When she will arrive', 'B. What supplies she will need', 'C. What room she will use', 'D. Who will accompany her', 'B'),
(172, 'Why did Ms. Noonan send a letter to Mr. Jean?', 'A. To give him details about the job interview place and time', 'B. To give him information about his first day of work', 'C. To provide information about available places for rent', 'D. To confirm whether he would accept the job', 'A'),
(173, 'What did Ms. Noonan send with the letter?', 'A. Telephone numbers', 'B. A copy of the contract', 'C. Contact information of company employees', 'D. A schedule', 'B'),
(174, 'The phrase ''settle into'' in the second paragraph is closest in meaning to:', 'A. Look for', 'B. Explore', 'C. Become comfortable in', 'D. Navigate within', 'C'),
(175, 'In which of the positions marked [1], [2], [3] and [4] does the following sentence belong? "Your laboratory manager will give you further details after the first day."', 'A. [1]', 'B. [2]', 'C. [3]', 'D. [4]', 'C'),
(176, 'According to the Web page, what must scholarship recipients do?', 'A. Keep track of monthly expenses', 'B. Write a research paper', 'C. Submit an annual report', 'D. Take an entrance examination', 'C'),
(177, 'What is indicated about the scholarship applications?', 'A. They will be received by mid-April.', 'B. They will be accepted only if requirements are met.', 'C. They will be reviewed and selected by German professors.', 'D. They must be submitted online.', 'B'),
(178, 'In the Web page, the word ''proficiency'' in paragraph 1, line 6, is closest in meaning to', 'A. system', 'B. practice', 'C. experience', 'D. mastery', 'D'),
(179, 'What is the purpose of the e-mail?', 'A. To confirm a departure date', 'B. To schedule an interview', 'C. To give some information to a scholarship winner', 'D. To enroll in required courses in a university in Germany', 'C'),
(180, 'What is suggested about Mr. Porter?', 'A. He worked at the Blackrock Foundation.', 'B. He is an entrepreneur working in Germany.', 'C. He has a good command of German.', 'D. He wants to be a language instructor.', 'C'),
(181, 'According to the invoice, what amount is due by April 1?', 'A. $20', 'B. $90', 'C. $95', 'D. $190', 'C'),
(182, 'What service was NOT provided to Randall Auto Body?', 'A. Window care', 'B. Floor care', 'C. Furniture care', 'D. Carpet care', 'C'),
(183, 'Why did Ms. Collins write a letter?', 'A. The cleaning service missed an appointment.', 'B. She was overcharged for a service.', 'C. The cleaning service added an extra fee to her bill.', 'D. She would like to renew her contract.', 'B'),
(184, 'What is implied about Sunny Day Cleaning?', 'A. They provide decent service.', 'B. They are often late to appointments.', 'C. They frequently overcharge their clients.', 'D. They offer late payment options.', 'B'),
(185, 'What did Ms. Collins send besides her letter?', 'A. A coupon for auto repairs', 'B. A copy of an email', 'C. A signed contract', 'D. A check for the amount due', 'D'),
(186, 'How are Jordan Mills and Michael Owens similar?', 'A. Both started technology companies.', 'B. Both wanted an efficient way to commute.', 'C. Both were employed in public transportation.', 'D. Both won awards for their achievements .', 'B'),
(187, 'What is indicated about Freewheel?', 'A. It started out small.', 'B. It is an international company.', 'C. It employs bus drivers.', 'D. It is good for the environment.', 'A'),
(188, 'What is most likely true about Michael Owens?', 'A. He dislikes driving.', 'B. He owns a taxi company.', 'C. He wants to expand his business.', 'D. He has met Jordan Mills.', 'C'),
(189, 'The word "respite" in the title of the article is closest in meaning to:', 'A. Employment', 'B. Immunity', 'C. A refund', 'D. A break', 'D'),
(190, 'What is the certificate awarding?', 'A. The best drivers', 'B. Environmental efforts', 'C. A good idea', 'D. The highest earning company', 'B'),
(191, 'What job does Mr. Alberts have?', 'A. President', 'B. HR Manager', 'C. CEO', 'D. Account Director', 'C'),
(192, 'What is indicated about Action Services?', 'A. They care about art.', 'B. They are concerned about the environment.', 'C. They need to sell more packages.', 'D. Their old delivery serve delivered packages to the wrong address.', 'B'),
(193, 'According to the e-mails, what can you infer?', 'A. Emergent Solutions offers cheaper shipping costs than Express Corp.', 'B. Emergent Solutions will likely not be efficient.', 'C. Emergent Solutions has a business ethics at odds with Action Services.', 'D. Action Services is in debt.', 'A'),
(194, 'Why did Action Services contact Emergent Solutions?', 'A. They needed new customers.', 'B. They were spending too much on shipping.', 'C. They wanted to expand their operation.', 'D. They wanted to ship internationally.', 'B'),
(195, 'What kind of business is Action Services?', 'A. Technology consultants', 'B. Leadership experts', 'C. Hotel and resort specialists', 'D. Florist and novelty supplier', 'D'),
(196, 'Where is most likely true about James and Aaron?', 'A. They are competitors.', 'B. They are related.', 'C. They are married.', 'D. They are friends.', 'D'),
(197, 'What is indicated about Aaron?', 'A. He is not very good at his job these days.', 'B. The owner loves him.', 'C. There are problems in the main office.', 'D. He will keep his job after the evaluations come in.', 'C'),
(198, 'According to the information provided, what is true about James?', 'A. He has done very well at work.', 'B. He needs more sales.', 'C. He wants to work with James.', 'D. He will become a barber.', 'A'),
(199, 'What is the problem with the sales leads James gave to Aaron?', 'A. They are rated too highly.', 'B. They are worth too much money.', 'C. He doesn''t know the contacts.', 'D. They are in a field he is struggling in.', 'D'),
(200, 'What is the job that Mr. Jones most likely has?', 'A. Human resource agent', 'B. Sales Executive', 'C. Owner', 'D. Associate Secretary', 'B');