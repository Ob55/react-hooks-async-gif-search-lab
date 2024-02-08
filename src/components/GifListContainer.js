import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "dolphin") => {
    const apiKey = "ONxS6KbLxqDEPzTxy2DMUW8b9xQ22qer"; 
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then(response => response.json())
      .then(({ data }) => {
        const gifs = data.slice(0, 3).map(gif => ({
          id: gif.id,
          url: gif.images.original.url
        }));
        this.setState({ gifs });
      })
      .catch(error => console.error("Error fetching gifs:", error));
  };

  handleSubmit = query => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
