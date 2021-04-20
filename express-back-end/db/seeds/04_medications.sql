INSERT INTO medications (name, nickname, user_id, prescribed_date, pharmacy_id, prescribed_doctor_id, refills_remaining, instructions, is_take_with_water, is_take_with_food)
                 VALUES ('Warfarin', 'Blood Clots', 1, '2021-01-15', 1, 2, 3, 'Take once per day, with or without food.', FALSE, TRUE),
                        ('Co-Trimoxazole', 'Antibiotic', 1, '2019-09-24', 2, 2, 0, 'Double strength, take 1/day for 3 weeks', TRUE, TRUE),
                        ('Alprazolam', 'Xanax/Anxiety', 1, '2018-10-15', 1, 1, 2, 'Take as needed for stress and anxiety', FALSE, FALSE),
                        ('Metformin', 'Diabetes', 1, '2020-08-23', 5, 3, 2, 'Take three times a day', TRUE, TRUE),
                        ('Azithromycin', 'Sinus infection', 1, '2020-03-11', 4, 4, 0, 'Take twice a day, must finish all pills', TRUE, FALSE);