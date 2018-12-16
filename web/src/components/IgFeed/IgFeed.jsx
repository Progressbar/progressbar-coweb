import React, { Component } from "react";
import "./IgFeed.css";

class IgFeed extends Component {
  constructor() {
    super()
    this.state = {
      igPosts: []
    }
  }

  async componentDidMount () {
    const url = 'https://wt-4665476769bf9081da4dd878527b9c7d-0.sandbox.auth0-extend.com/pb-web-ig'
    const igData = await fetch(url, {
        method: "GET",
    }).then(res => res.json())
    this.setState({ igPosts: igData.data })
  }

  render() {
    const { igPosts } = this.state
    return (
      <div>
        {igPosts.map(post => (
          <div key={post.id}>
            <img src={post.images.standard_resolution.url} alt={post.tags} />
          </div>
        ))}
      </div>
    )
  }
}

export default IgFeed;
