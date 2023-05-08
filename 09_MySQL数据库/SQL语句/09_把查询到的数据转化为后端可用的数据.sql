-- 1.单表查询
SELECT * FROM `products` WHERE price > 5000;

-- 2.多表查询
SELECT * FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id WHERE price > 5000;

-- 3.多表查询： 把品牌信息放到一个单独的对象中
SELECT 
	products.id as id, products.title as title, products.price as price,
	JSON_OBJECT('id',brands.id, 'name',brands.`name`, 'website',brands.website, 'rank',brands.worldRank) as brand
 FROM `products` LEFT JOIN `brands` ON products.brand_id = brands.id WHERE price > 5000;
 
 -- 4.多对多：通过分组把查询到的结果转化为数组，数组中又存放的是对象类型
 SELECT *
 FROM `students` stu
 LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
 LEFT JOIN `courses` cs ON ssc.course_id =cs.id WHERE cs.id IS NOT NULL;
 
 SELECT 
	stu.id AS id, stu.`name` AS `name`, stu.age  AS age,
	JSON_ARRAYAGG(JSON_OBJECT('id',cs.id, 'name',cs.`name`, 'price',cs.price)) AS courses
 FROM `students` stu
 LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.student_id
 LEFT JOIN `courses` cs ON ssc.course_id =cs.id WHERE cs.id IS NOT NULL
 GROUP BY stu.id;