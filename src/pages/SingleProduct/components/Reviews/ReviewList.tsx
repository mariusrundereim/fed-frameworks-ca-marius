import React from "react";
import { Typography } from "@mui/material";
import { Product } from "../../../../services/store/store";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
type ReviewListProps = {
  product: Product;
};

function ReviewList({ product }: ReviewListProps) {
  return (
    <List>
      {product.reviews.map((review) => (
        <React.Fragment key={review.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={review.username}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {review.rating}
                  </Typography>
                  — {review.description}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default ReviewList;
