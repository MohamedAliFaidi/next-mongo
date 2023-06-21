
async function page(props) {

  // the folder post introduce dynamic routing in nextjs js 
  // navigate to this page by going to /post/1 from your browser so you can see the post id that we passed in the url in the page content
  // this can be very helpfull  when solving your backlogs 

  console.log(props)
  return (
    <div>{props.params.postId}</div>
  )
}

export default page