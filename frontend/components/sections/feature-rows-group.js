import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            "flex flex-col justify-start md:justify-between md:items-center gap-10 font-serif",
            {
              "lg:flex-row": index % 2 === 0,
              "lg:flex-row-reverse": index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full lg:w-6/12 lg:pr-6 text-lg">
            <h3 className="title">{feature.title}</h3>
            <ul>
            <li ><i className="fa fa-check-square-o bg-accent"></i> <p className="my-6">{feature.description}</p></li>
            <li ><i className="fa fa-check-square-o"></i> <p className="my-6">{feature.desc1}</p></li>
            <li ><i className="fa fa-check-square-o"></i> <p className="my-6">{feature.desc2}</p></li>
            <li ><i className="fa fa-check-square-o"></i> <p className="my-6">{feature.desc3}</p></li>

            
            </ul>
      
          </div>
          {/* Media section */}
          <div className="w-full max-h-full">
            {/* Images */}
            {feature.media.data.attributes.mime.startsWith("image") && (
              <div className="w-full h-auto">
                <NextImage media={feature.media} />
              </div>
            )}
            {/* Videos */}
    
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup
