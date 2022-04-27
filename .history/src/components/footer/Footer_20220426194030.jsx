import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import { Link, Outlet } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Segment >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                {/* <Header inverted as="h4" content="About" /> */}
                <List link inverted>
                  <List.Item as={Link} to="/">
                    Home
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <List link inverted>
                  <List.Item as={Link} to="/products">
                    Products
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <List link inverted>
                  <List.Item>PHONE: +374-94-24-68-80</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
