import Card from "@/components/home/card";

interface GalleryProps {
  caption?: string;
  list: any[];
}

export default function Gallery(props: GalleryProps) {
  const { list } = props;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {list &&
        list.length > 0 &&
        list.map((item, index) => {
          const { title, description, thumbnail } = item;
          return (
            <Card key={index}>
              <div className="flex flex-col" key={index}>
                <div className="relative h-96 w-full">
                  <img
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    src={thumbnail}
                    alt={title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-md text-gray-500">{description}</p>
                </div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}
