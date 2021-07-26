import React from "react";

export const Profile = () => {
  return (
    <div class="tile is-ancestor">
        <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">About You</p>
          <p>Date Joined: </p>
          <figure class="image is-128x128">
            <img
              class="is-rounded is-centered"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
          <p>
            Suspendisse varius ligula in molestie lacinia. Maecenas varius eget
            ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus,
            augue diam porttitor lorem, et sollicitudin felis neque sit amet
            erat. Maecenas imperdiet felis nisi, fringilla luctus felis
            hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim
            turpis. Sed eget varius ligula, at volutpat tortor.
          </p>
          <p>
            Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
            erat, vitae congue lectus dolor consequat libero. Donec leo ligula,
            maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
            nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero.
            Quisque non semper leo.
          </p>
        </div>
      </div>
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">Questions Posted by You</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        <div class="tile is-child box">
          <p class="title">Answers Posted by You</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
    </div>
  );
};
