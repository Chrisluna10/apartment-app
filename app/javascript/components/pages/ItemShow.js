import React, { useEffect, useState } from "react"
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"
import {localhost, heroku} from "../../fetch-urls"

// commented out code will be to show similar items to the one that is being rendered.

const styles = {
  borderStyle: {},
}

export default function Item(props) {
  // let { recommendations } = props
  const [item, setItem] = useState({})
  const navigate = useNavigate()
  const params = useParams()

  function fetchItem() {
    fetch(`${heroku}/items/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setItem({
          name: res.name,
          category: res.category,
          price: res.price,
          description: res.description,
          image: res.image_url,
          username: res.username,
          time: res.formatted_time,
          user_created: res.user_created,
        })
      )
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchItem()
  }, [])

  // const datas = recommendations.filter((recommendation) => {
  //   return recommendation.category === `${item.category}`
  // })

  // console.log(datas)

  return (
    <>
      {item && (
        <Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            columns={12}
          >
            <Grid
              container
              item
              xs={8}
              justifyContent="center"
              backgroundColor="#f2f2f2"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    width: 600,
                  }}
                  src={item.image}
                />
              </Grid>
            </Grid>

            <Grid container item xs={4} direction="column">
              <Grid
                container
                item
                direction="column"
                paddingLeft={1.5}
                alignItems="flex-start"
                xs={8}
                borderBottom="1px solid #9b9ba4"
              >
                <Typography fontWeight="bold" fontSize={35}>
                  {item.name}
                </Typography>
                <Typography fontWeight="bold" fontSize={40}>
                  ${item.price}
                </Typography>
                <Typography>{item.category}</Typography>
                <Typography>date posted: {item.time}</Typography>
              </Grid>

              <Grid
                container
                item
                direction="column"
                paddingLeft={1.5}
                alignItems="flex-start"
                xs={4}
              >
                <Typography>posted by: {item.username}</Typography>
                <Typography>member since {item.user_created}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            borderTop="1px solid #9b9ba4"
            height="120px"
            direction="column"
          >
            <Grid item>
              <Typography fontWeight="bold" fontSize="20px">
                Description:
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{item.description}</Typography>
            </Grid>
          </Grid>

          {/* <Grid container item>
            {datas.map((data) => {
              return (
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="center"
                  columns={6}
                  xs
                  padding={0.8}
                  key={data.id}
                >
                  <Card xs={1} sx={{ maxWidth: 200 }}>
                    <CardActionArea onClick={() => handleClick(data)}>
                      <img src={data.image_url} height="150px" width="180px" />
                      <CardContent>
                        <Typography fontWeight="fontWeightBold">
                          {data.name}
                        </Typography>
                      </CardContent>
                      <Grid
                        container
                        item
                        direction="column"
                        padding={1}
                        alignItems="flex-start"
                      >
                        <Typography>{data.category}</Typography>
                        <Grid
                          container
                          item
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Typography>${data.price}</Typography>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })}
          </Grid> */}
        </Grid>
      )}
    </>
  )
}
