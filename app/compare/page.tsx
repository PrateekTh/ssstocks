import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StockCard from "./stockCard"
import Spotlight from "./spotlight"
import Series from "./series"

function ComparePage() {
    
    // console.log(await detailData.json())
    return (
        
    <div className="block bg-black items-center lg:p-5">
        <Tabs defaultValue="table" className=" items-center">
            <TabsList className="mx-auto m-2 w-[250px]">
                <TabsTrigger value="table">Stock Card</TabsTrigger>
                <TabsTrigger value="graph">Spotlight</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
            </TabsList>

            <TabsContent value="table">
                <StockCard/>
            </TabsContent>

            <TabsContent value="graph">
                <Spotlight/>
            </TabsContent>
            <TabsContent value="series">
                <Series/>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default ComparePage