import { Typography, Avatar, CardContent, CardMedia, CardHeader, Card, Grid } from "@mui/material";
import "./index.css"
const info = {
  image:
    "https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/71116208_2154903351278332_4425042497978236928_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=tqUXfdKBo8sAX_989Qd&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT8oMSXRsYzhnuxiw00IBUIacJQlbg9zMwN9lqZWGt5Wpw&oe=62A4B616",
  name: "Saylani Mass IT Training",
};

export default function PostCard() {
  return (
    <Grid container px={2} spacing={4}>
      <Grid item sm={12} md={12} display="flex" justifyContent="center">
        <Card sx={{ width: "474px" }}>
          <CardHeader
            avatar={<Avatar aria-label="profile" src={info.image} />}
            title={info.name}
            subheader="September 14, 2016"
          />
          <CardMedia
           className="cardHeight"
            component="img"
            image="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg"
            alt="Photo"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={12} display="flex" justifyContent="center">
        <Card sx={{ width: "474px" }}>
          <CardHeader
            avatar={<Avatar aria-label="profile" src={info.image} />}
            title={info.name}
            subheader="September 14, 2016"
          />
          <CardMedia
           className="cardHeight"
            component="img"
            image="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg"
            alt="Photo"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={12} display="flex" justifyContent="center">
        <Card sx={{ width: "474px" }}>
          <CardHeader
            avatar={<Avatar aria-label="profile" src={info.image} />}
            title={info.name}
            subheader="September 14, 2016"
          />
          <CardMedia
           className="cardHeight"
            component="img"
            image="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg"
            alt="Photo"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={12} display="flex" justifyContent="center">
        <Card sx={{ width: "474px" }}>
          <CardHeader
            avatar={<Avatar aria-label="profile" src={info.image} />}
            title={info.name}
            subheader="September 14, 2016"
          />
          <CardMedia
           className="cardHeight"
            component="img"
            image="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/16:9/w_3999,h_2249,c_limit/MtFuji-GettyImages-959111140.jpg"
            alt="Photo"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
     
    </Grid>
  );
}
