let
  pkgs = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };
in
  { nixpkgs ? import <nixpkgs> {} }:
  with nixpkgs; mkShell {
  buildInputs = [
    pkgs.deno
  ];
}
