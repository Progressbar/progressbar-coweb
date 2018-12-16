import React, { Component } from "react";
import "./IgFeed.css";
import { Grid, Image } from 'semantic-ui-react'

class IgFeed extends Component {
  constructor() {
    super()
    this.state = {
      igPosts: []
    }
  }

  async componentDidMount () {
    const count = 10
    const url = `https://wt-4665476769bf9081da4dd878527b9c7d-0.sandbox.auth0-extend.com/pb-web-ig?count=${count}`
    const igData = await fetch(url, {
        method: "GET",
    }).then(res => res.json())
    this.setState({ igPosts: igData.data })
  }

  render() {
    const { igPosts } = this.state
    return (
      <div>
        <Grid columns={4}>
          {igPosts.map(post => (
            <Grid.Column>
              <Image src={post.images.standard_resolution.url} alt={post.tags} />
            </Grid.Column>
          ))}
        </Grid>
      </div>
    )
  }
}

export default IgFeed;
