import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor(){
        super();
        
        this.state = {
            sections: [
                {
                    title: 'spring',
                    imageUrl: 'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg',
                    size: 'large',
                    id: 1
                },
                {
                    title: 'summer',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-tropical-sunset-scenery-two-sun-beds-royalty-free-image-1595368231.jpg?crop=1.00xw:0.752xh;0,0.159xh&resize=980:*',
                    size: 'large',
                    id: 2
                },
                {
                    title: 'fall',
                    imageUrl: 'https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg',
                    size: 'large',
                    id: 3
                },
                {
                    title: 'winter',
                    imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/YBN9ZaH_U7qG1-azndufINkfXDs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/01/07/716/n/1922441/42b570505e14adc5e19b71.13653681_photography-/i/Best-Winter-Photos.jpg',
                    
                    id: 4
                }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map( (item) => (
                        <MenuItem key={item.id} title={item.title} imageUrl = {item.imageUrl}/>
                    )
                    )
                }
            </div>
        )
    }
}

export default Directory;