import { OuterTransaction } from "./outer_transaction";

export type Block = {
    block_hash: string;
    previous_hash: string;
    header: Header;
    transactions?: (OuterTransaction)[];
    signature: string;
}
export type Header = {
    previous_state_root: string;
    transactions_root: string;
    metadata: Metadata;
}
export type Metadata = {
    network: number;
    round: number;
    height: number;
    coinbase_target: number;
    proof_target: number;
    timestamp: number;
}
  