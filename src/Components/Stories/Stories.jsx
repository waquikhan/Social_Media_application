import "./Stories.scss";

const Stories = () => {

    //TEMPORARY DATA
    const stories =[
        {
            id:1,
            name:"Abuzar salman",
            image:"https://plus.unsplash.com/premium_photo-1688497831081-836510928186?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            name:"Ather Iqubal",
            image:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            name:"Urooj Khan",
            image:'https://images.unsplash.com/photo-1525393839361-867d646aea41?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id:4,
            name:"Aayesha_khan",
            image:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
       

    ];
  return (
    <div className='stories'>
        <div className="story">
            <img src="https://images.pexels.com/photos/296114/pexels-photo-296114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Waqui Khan</span>
            <button>+</button>
        </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.image}alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories
