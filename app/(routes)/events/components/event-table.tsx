
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const EventTable = () => {
  return (
    <Table>
      <TableCaption>{}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Data</TableHead>
          <TableHead className="w-[250px]">Evento</TableHead>
          <TableHead>Local</TableHead>
          <TableHead className="text-right">Horário</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">27 Ago.</TableCell>
          <TableCell>IOUSANUONSAO</TableCell>
          <TableCell>São Paulo, SP</TableCell>
          <TableCell className="text-right">14hrs</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
 
export default EventTable;