insert into houses
(name, address, city, state, zip, img)
values
($1, $2, $3, $4, $5, $6);

select * from houses;