import NextImage from "../elements/image"

const FeatureColumnsGroup = ({ data }) => {
  return (
    
 <div
 className=""
 data-open="hover"
 data-menu="horizontal-menu"
 data-col="1-column"
 data-layout="dark-layout"
 style={{ backgroundImage: "url(/assets/images/stack.png)" }}
>
    <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12 font-serif" key={data.image}>
      {data.features.map((feature) => (
        <div className="flex-1 text-lg rounded-md border py-12 px-8 flex-1 md:w-lg" key={feature.id}>
          <div className="w-10 h-10 m-auto ">
            <NextImage media={feature.icon} />
          </div>
          <h3 className="font-bold mt-4 mb-4 text-white text-center">{feature.title}</h3>
          <p className="text-white text-center font-light">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default FeatureColumnsGroup
