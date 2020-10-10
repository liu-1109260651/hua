set names utf8;
drop database if exists hua;
create database hua charset=utf8;
use hua;
create table hua_user(
  lid int primary key auto_increment,
  upwd varchar(15),
  email varchar(20),
  phone bigint
 
);
insert into hua_user values(null,123456,'1109260651@qq.com',13458527306);
insert into hua_user values(null,1234567,'2109260651@qq.com',13458527366);
insert into hua_user values(null,1234568,'3109260651@qq.com',13458527356);
insert into hua_user values(null,1234569,'4109260651@qq.com',13458527376);
create table hua_details(
  lid int primary key,
  title varchar(50),
  title2 varchar(50),
  subtitle varchar(50),
  price  int,
  price2 int,
  detail varchar(100),
  ps varchar(50),
  img1 varchar(50),
  img2 varchar(50),
  img3 varchar(50),
  img4 varchar(50)
);
insert into hua_details values(1,"一往情深","精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎","经典爆款，年销售冠军！",239,234,"高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎","顺丰空运深圳发货, 全国可达, 包邮!","http://127.0.0.1:9000/details/details_9.jpg","http://127.0.0.1:9000/details/details_10.jpg","http://127.0.0.1:9000/details/details_11.jpg","http://127.0.0.1:9000/details/details_12.jpg");
insert into hua_details values(2,"星河璀璨","香槟玫瑰9枝、蓝绣球、向日葵、白色洋桔梗、大叶尤加利","倾情设计，9折特惠",262,257,"香槟玫瑰9枝、蓝绣球1枝、向日葵3枝、白色洋桔梗5枝、大叶尤加利5枝！","顺丰空运深圳发货, 全国可达, 包邮!","http://127.0.0.1:9000/details/details_9.jpg","http://127.0.0.1:9000/details/details_10.jpg","http://127.0.0.1:9000/details/details_11.jpg","http://127.0.0.1:9000/details/details_12.jpg");
insert into hua_details values(3,"馨情无限","戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝","高端花盒设计",237,232,"高档礼盒装鲜花:戴安娜粉玫瑰11枝，红色康乃馨11支，红色石竹梅4枝，栀子叶4枝","顺丰空运深圳发货, 全国可达, 包邮!","http://127.0.0.1:9000/details/details_5.jpg","http://127.0.0.1:9000/details/details_6.jpg","http://127.0.0.1:9000/details/details_7.jpg","http://127.0.0.1:9000/details/details_8.jpg");
insert into hua_details values(4,"花好月圆永生花台灯/送父母长辈定制款","精选进口多色永生康乃馨台灯","中期节礼物 送长辈定制款",298,298,"进口多色永生康乃馨、永生花玫瑰、双色永生绣球、尤加利果、松果、八角花、虞美人、情人草、小叶黄杨、羊齿叶、红色米花","顺丰空运深圳发货, 全国可达, 包邮!","http://127.0.0.1:9000/details/details_1.jpg","http://127.0.0.1:9000/details/details_2.jpg","http://127.0.0.1:9000/details/details_3.jpg","http://127.0.0.1:9000/details/details_4.jpg");

create table hua_product(
  lid int primary key,
  title varchar(20),
  subtitle varchar(20),
  price  int,
  img  varchar(50)
);
insert into hua_product values(1,"热销花篮","+月饼组合",299,"http://127.0.0.1:9000/index/hua_1.jpg");
insert into hua_product values(2,"热销鲜花","限时9折",262,"http://127.0.0.1:9000/index/hua_2.jpg");
insert into hua_product values(3,"团圆鲜花","馨情无限",237,"http://127.0.0.1:9000/index/hua_3.jpg");
insert into hua_product values(4,"口碑好礼","花好月圆永生花",298,"http://127.0.0.1:9000/index/hua_4.jpg");

create table hua_banner(
  lid int primary key,
  imgs varchar(100)
);
insert into hua_banner values(1,'http://127.0.0.1:9000/banner/banner_1.jpg');
insert into hua_banner values(2,'http://127.0.0.1:9000/banner/banner_2.jpg');
insert into hua_banner values(3,'http://127.0.0.1:9000/banner/banner_3.jpg');
insert into hua_banner values(4,'http://127.0.0.1:9000/banner/banner_4.jpg');
insert into hua_banner values(5,'http://127.0.0.1:9000/banner/banner_5.jpg');