import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Character from '../Character'
import '@testing-library/jest-dom/extend-expect'

describe("Character card", () => {
    // mocking data to test the data comming from the api call
    const data = {
        name: "",
        thumbnail: {
            path: ""
        }
    };

    it("shows all the value with empty value", () => {
        const { getByTestId } = render(<Character character={data} />);
        const cardImage = getByTestId("card-image");
        const charName = getByTestId("charName");
        expect(charName).toHaveTextContent(data.name)
        expect(cardImage).toHaveAttribute('src', data.thumbnail.path + '.jpg');
        expect(cardImage).toHaveAttribute('alt', 'marvel action character');
    });
})
