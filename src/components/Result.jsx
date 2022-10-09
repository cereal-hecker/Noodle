import React from "react";

export default function Result(props) {

    return (
    <div>
        <div class="px-6 py-7">
            <a href={props.link}>
                <h7 class="text-gray-400 text-sm">{props.displayed_link}</h7>
                <h3 class="font-bold text-lg hover:underline text-blue-700">{props.title}</h3>
                <p>{props.snippet}</p>
            </a>
        </div>
    </div>
    )
  }