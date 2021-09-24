// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line import/no-anonymous-default-export
export default (request, response)=>{
  const {name}=request.body;

  return response.json({message:'Oi sou Api!'})
}

