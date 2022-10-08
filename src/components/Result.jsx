import React from "react";

export default function Result(props) {

    return (
    <div>
        <div class="px-6 py-7 w-100">
            <a href={props.link}>
                <h3 class="font-bold text-lg">{props.title}</h3>
                <h7 class="text-gray-400 text-sm">{props.displayed_link}</h7>
                <p>{props.snippet}</p>
            </a>
        </div>
    </div>
    )
  }